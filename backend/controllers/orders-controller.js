const Joi = require("joi")
const Item = require("../models/Item")
const User = require("../models/User")


const getAllOrders = async (req, res) => {
    const { user } = req

    try {
        const orders = await user.orders
        res.json(orders)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const validateOrder = data => {
    const schema = Joi.object({
        items: Joi.array().required().min(1).max(10),
        address: Joi.object().required(),
        slot: Joi.date().required().min(new Date())
    })

    return schema.validate(data).error
}

const order = async (req, res) => {
    const { user } = req

    /* 

    headers
    ------------
    should conatain auth token as bearer token
    ------------------------------------------

    will accept in body
    ------------------------
    - items.arrat()     => which will contain only {_id, ...etc of the item}
    - address.Object    => which will be only address from users addresses
    - slot.date()       => which will be the date when user wants the order back
    -----------------------------------------------
    */


    // validation of correct order format
    const validationError = validateOrder(req.body)
    if (validationError) return res.status(400).json({ message: validationError.details[0].message })


    // destructure data
    let { items, address, slot } = req.body

    try {
        if (!items) throw new Error('Items not found!')
        if (!address || typeof address != 'object') throw new Error('Address not found or not valid!')

        slot = Date.parse(slot)
        if (!slot) throw new Error("slot not valid!")

        const totalPrice = items.reduce((a, c) => a + c.varieties[0].price * c.qty, 0)

        // finally everyting ok so add it to db.
        // await user.updateOne({ $push: { $orders: req.body } })
        const order = { items, address, slot, totalPrice }
        console.log(order)
        res.json({ message: "Order successful!" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { getAllOrders, order }