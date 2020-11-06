const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    min: 2,
    max: 255,
    required: true,
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

categorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Category", categorySchema);
