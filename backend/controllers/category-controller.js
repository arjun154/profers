const Category = require("../models/Category");

const getCategories = async (req, res) => {
  const { page, sortBy, sortOrder, limit, query } = req.queryObject;
  try {
    const categories = await Category.paginate(
      { name: { $regex: query, $options: "i" } },
      { page, limit, sort: { [sortBy]: sortOrder } }
    );
    res.json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await new Category({ name }).save();
    res.json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getCategories, addCategory };
