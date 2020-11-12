const Item = require("../models/Item");
const mongoose = require("mongoose");

const addItem = async (req, res) => {
  try {
    const images = req.files.map((image) => ({
      name: image.key,
      location: image.location,
    }));

    const data = {
      ...req.body,
      varieties: JSON.parse(req.body.varieties || "[]"),
      images,
    };

    const newItem = await new Item(data).save();
    res.json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getItems = async (req, res) => {
  const { page, sortBy, sortOrder, limit, query } = req.queryObject;
  const { item, city } = req.params;
  
  try {
    const myAggregate = Item.aggregate([
      { $match: { name: { $regex: item, $options: "i" } } },
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
          varieties: {
            $filter: {
              input: "$varieties",
              as: "variety",
              cond: { $eq: ["$$variety.city", mongoose.Types.ObjectId(city)] }
            }
          },
          images: 1,
          createdAt: 1,
          productDetails: 1,
        },
      },
    ]);
    const items = await Item.aggregatePaginate(myAggregate, {
      page,
      limit,
      sort: { [sortBy]: sortOrder },
    });
    res.json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addItem, getItems };
