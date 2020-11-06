const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
    min: 2,
    max: 255,
    required: true,
    unique: true,
  },
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: [Number], // [22.2475, 14.2547]  [longitude, latitude]
  },
});

citySchema.plugin(aggregatePaginate);

module.exports = mongoose.model("City", citySchema);
