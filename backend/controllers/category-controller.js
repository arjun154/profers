const Category = require("../models/Category");

const getCategories = async (req, res) => {
  const { page, sortBy, sortOrder, limit, query } = req.queryObject;
  try {
    const myAggregate = Category.aggregate([
      { $project: { subCategories: 0 } },
      { $match: { name: { $regex: query, $options: "i" } } },
    ]);
    const categories = await Category.aggregatePaginate(myAggregate, {
      page,
      limit,
      sort: { [sortBy]: sortOrder },
    });
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

const getSubCategories = async (req, res) => {
  const { category } = req.params;
  const { page, sortBy, sortOrder, limit, query } = req.queryObject;
  try {
    const myAggregate = Category.aggregate([
      { $match: { name: category } },
      { $unwind: "$subCategories" },
      { $replaceWith: "$subCategories" },
      { $match: { name: { $regex: query, $options: "i" } } },
    ]);
    const subCategories = await Category.aggregatePaginate(myAggregate, {
      collation: `"category.subCategory`,
      page,
      limit,
      sort: { [sortBy]: sortOrder },
    });
    res.json(subCategories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addSubCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const updatedCategory = await Category.updateOne(
      { name: category },
      { $push: { subCategories: req.body } }
    );
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getCategories,
  addCategory,
  getSubCategories,
  addSubCategory,
};
