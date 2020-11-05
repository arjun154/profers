const Category = require("../models/Category");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).find({});
    res.json(categories);
  } catch (error) {}
};
