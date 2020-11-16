const Joi = require("joi")
const Item = require("../models/Item")
const User = require("../models/User")

const { v4: uuid } = require('uuid')
const RazorPay = require('razorpay')
const { default: Axios } = require('axios')

const instance = new RazorPay({
    key_id: process.env.RAZOR_PAY_KEY_ID,
    key_secret: process.env.RAZOR_PAY_KEY_SECRET
})



const getAllOrders = async (req, res) => {
    const { user } = req

    try {
        const orders = await user.orders
        orders.sort((a, b) => b.createdAt - a.createdAt)
        res.json(orders)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}



const validateOrder = data => {
    const schema = Joi.object({
        items: Joi.array().required().min(1).max(10),
        address: Joi.object().required(),
        slot: Joi.date().min(new Date())
    })

    return schema.validate(data).error
}

const order = async (req, res) => {
    const { user } = req
    let { price = 1000 } = req.query
    price = Number(price)
    /* 

    headers
    ------------------------------------------
    should conatain auth token as bearer token
    ------------------------------------------

    will accept in body
    -----------------------------------------------
    - items.arrat()     => which will contain only {_id, ...etc of the item}
    - address.Object    => which will be only address from users addresses
    - slot.date()       => which will be the date when user wants the order back
    -----------------------------------------------
    */


    // validation of correct order format
    // const validationError = validateOrder(req.body)
    // if (validationError) return res.status(400).json({ message: validationError.details[0].message })


    // destructure data
    let { items, address, slot } = req.body


    try {
        if (!items) throw new Error('Items not found!')
        items = Object.values(items)
        if (!address || typeof address != 'object') throw new Error('Address not found or not valid!')

        slot = new Date(slot || "2020-11-16T16:51:28.190Z")
        if (!slot) throw new Error("slot not valid!")

        // const totalPrice = items.reduce((a, c) => a + (c.varieties[0].price * ((1 - c.varieties[0].sale) / 100)) * c.qty, 0)

        const razorPayOptions = {
            amount: price,
            currency: 'INR',
            receipt: uuid(),
            payment_capture: 0
        }

        const orderRz = await instance.orders.create(razorPayOptions)
        // finally everyting ok so add it to db.
        const data = { totalPrice: price, razorPayId: orderRz.id, razorPayReceipt: orderRz.receipt, items, address, slot }
        const d = await user.updateOne({ $push: { orders: data } }, { upsert: true })
        res.json(orderRz)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const captureOrder = async (req, res) => {
    const { paymentId } = req.params
    const { total } = req.body
    const { user } = req

    const url = `https://${process.env.RAZOR_PAY_KEY_ID}:${process.env.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${paymentId}/capture`

    try {
        const { data } = await Axios.post(url, { amount: Number(total), currency: 'INR' })

        const { order_id } = data

        await User.updateOne({ _id: user._id, "orders.razorPayId": order_id }, { $set: { "orders.$.isConfirmed": true } })

        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getAllOrders, order, captureOrder }