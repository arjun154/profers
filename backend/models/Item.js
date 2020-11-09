const { func } = require("joi");
const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 1,
    max: 2000,
    unique: true,
  },
  location: {
    type: String,
    min: 1,
    max: 2000,
    required: true,
    unique: true,
  },
});

const varietySchema = new Schema({
  availableQty: {
    type: Number,
    min: 0,
    max: 10000,
    default: 10,
  },
  size: {
    type: String,
    min: 1,
    max: 255,
    unique: true,
    default: "5mg",
  },
  price: {
    type: Number,
    min: 0,
    max: 20000,
    default: 2000,
  },
  seller: {
    type: String,
    min: 2,
    max: 255,
    default: "Profers LTD.",
  },
  sale: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: "City",
    default: "5fa510453eb2a69849f5eceb",
  },
});

const itemSchema = new Schema(
  {
    name: {
      type: String,
      min: 2,
      max: 255,
      required: true,
    },
    images: [imageSchema],
    description: {
      type: String,
      min: 2,
      max: 2000,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      // ref: "Category",
      required: true,
    },
    subCategory: {
      type: Schema.Types.ObjectId,
      // ref: "Category.subCategory",
      required: true,
    },
    varieties: [varietySchema],
    productDetails: [{}],
  },
  { timestamps: true }
);

itemSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Item", itemSchema);
