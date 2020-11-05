const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
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
});

module.exports = mongoose.model("City", citySchema);
