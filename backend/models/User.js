const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addressSchema = new Schema(
  {
    surname: {
      type: String,
      min: 2,
      max: 2,
      required: true,
    },
    name: {
      type: String,
      min: 2,
      max: 255,
      required: true,
    },
    flat: {
      type: String,
      min: 2,
      max: 255,
      required: true,
    },
    street: {
      type: String,
      min: 2,
      max: 255,
      required: true,
    },
    location: {
      type: {
        type: String,
        default: "Point",
      },
      coordinates: [Number], // [22.2475, 14.2547]  [longitude, latitude]
    },
    addressType: {
      type: String,
      min: 1,
      max: 1,
      required: true,
    },
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    phone: {
      type: String,
      min: 10,
      max: 10,
      required: true,
    },
    addresses: [addressSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
