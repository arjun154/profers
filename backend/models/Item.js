const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    min: 2,
    max: 255,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  description: {
    type: String,
    min: 2,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category.subCategory",
  },
  variety: [
    {
      quantity: {
        type: Number,
        min: 0,
        max: 10000,
        default: 1,
      },
      size: {
        type: String,
        min: 1,
        max: 255,
        required: true,
      },
      price: {
        type: Number,
        min: 0,
        max: 20000,
        required: true,
      },
      seller: {
        type: String,
        min: 2,
        max: 255,
      },
      city: {
        type: Schema.Types.ObjectId,
        ref: "City",
      },
    },
  ],
});

module.exports = mongoose.model("Item", itemSchema);
