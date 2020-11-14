const { Schema, Mongoose } = require("mongoose");
const User = require("../models/User");

const addAddress = async (req, res) => {
  const { user } = req;

  try {
    const data = await user.updateOne({ $push: { addresses: req.body } });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllAddresses = async (req, res) => {
  const { user } = req;

  try {
    res.json(user.addresses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteAddress = async (req, res) => {
  const {user} = req
  const {id} = req.params

  try {
    await user.updateOne({$pull: {addresses: {'_id': id}}})
    res.json({message: "Deleted Successfully!"})
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

const updateAddress = async(req, res) => {
  const {user} = req
  const {id} =  req.params

  try {
    await User.findOneAndUpdate({_id: user._id, "addresses._id": id}, {$set: {'addresses.$': req.body}})
    res.json({message: "updated successfully!"})
  } catch (error) {
    res.status(400).json({message: "Error occoured!"})
  }
}

module.exports = { addAddress, getAllAddresses, deleteAddress, updateAddress };
