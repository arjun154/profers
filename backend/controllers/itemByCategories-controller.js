const Category = require("../models/Category");
const City = require("../models/City")
const Item = require("../models/Item");
const mongoose = require("mongoose");

const getByCategory = async (req, res) => {  
  const { query } = req.queryObject;
  
  try {
    const categoryId = await Category.findOne({ name: query });    
    const category_id = (await categoryId)._id
 
    const Items = await Item.find({category: mongoose.Types.ObjectId(`${category_id}`)})
    
    res.json(Items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getItemsBySubCategory = async (req, res) => {
  const { category, subCategory } = req.params;
  var subCategoryId = "";
  
  try {
    const categoryId = await Category.find({ name: category });    
    const category_id = categoryId[0]._id;
    categoryId[0].subCategories.map((item) => {
      if (item.name === subCategory) {
          subCategoryId = item._id
      }
    });
    
    const Items = await Item.find({ $and: [{ category: mongoose.Types.ObjectId(`${category_id}`) }, { subCategory: mongoose.Types.ObjectId(`${subCategoryId}`) }] } )
    
    res.json(Items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getByCity = async (req, res) => {
  const { page, sortBy, sortOrder, limit, query } = req.queryObject;
  const { city, category } = req.params;
  
  try {
    const cityId = await City.findOne({ name: city });
    const categoryId = await Category.findOne({ name: category });
    const category_id = (await categoryId)._id

    const myAggregate = Item.aggregate([
      {$match: {category: mongoose.Types.ObjectId(`${category_id}`)}},
      {
        $project: {
          varieties: {
            $filter: {
              input: "$varieties",
              as: "variety",
              cond: { $eq: ["$$variety.city", mongoose.Types.ObjectId(cityId._id)] }
            }
          },
          name: 1,
          images: 1
        }
      }
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
}
module.exports = { getByCategory, getItemsBySubCategory, getByCity };
