const mongoose = require("mongoose");

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

module.exports = mongoose.model("Category", categorySchema);
