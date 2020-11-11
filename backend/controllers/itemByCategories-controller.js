const Category = require("../models/Category");
const Item = require("../models/Item");

const getByCategory = async (req, res) => {
  const { page, sortBy, sortOrder, limit, query } = req.queryObject;
  const { category } = req.params;

  try {
    const categoryId = Category.findOne({ name: category });

    const myAggregate = Item.aggregate(
      Item.aggregate([
        { $match: { name: { $regex: query, $options: "i" } } },
        { $match: { $expr: { $eq: ["$category", categoryId] } } },
        {
          $lookup: {
            from: "categories",
            let: { categoryId: "$category", subCategoryId: "$subCategory" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$categoryId"] } } },
              { $unwind: "$subCategories" },
              {
                $match: {
                  $expr: { $eq: ["$subCategories._id", "$$subCategoryId"] },
                },
              },
              {
                $replaceRoot: { newRoot: "$subCategories" },
              },
            ],
            as: "subCategory",
          },
        },
        {
          $lookup: {
            from: "categories",
            localField: "category",
            foreignField: "_id",
            as: "category",
          },
        },
        { $unwind: "$category" },
        { $unwind: "$subCategory" },
        {
          $project: {
            category: "$category.name",
            subCategory: "$subCategory.name",
            name: 1,
            description: 1,
            varieties: 1,
            images: 1,
            createdAt: 1,
            productDetails: 1,
          },
        },
      ])
    );

    const items = Item.aggregatePaginate(myAggregate, {
      page,
      limit,
      sort: { [sortBy]: sortOrder },
    });
    res.json(items);
  } catch (error) {
    res.status(400).message({ message: error.message });
  }
};

module.exports = { getByCategory };
