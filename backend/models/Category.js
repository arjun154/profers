const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    min: 2,
    max: 255,
    required: true,
    unique: true,
  },
  subCategories: [
    {
      name: {
        type: String,
        min: 2,
        max: 255,
        required: true,
      },
    },
  ],
});

categorySchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Category", categorySchema);
