const City = require("../models/City");

const getCities = async (req, res) => {
  const { page, sortBy, sortOrder, limit, query } = req.queryObject;

  try {
    const myAggregate = City.aggregate([
      { $match: { name: { $regex: query, $options: "i" } } },
    ]);

    const cities = await City.aggregatePaginate(myAggregate, {
      page,
      limit,
      sort: { [sortBy]: sortOrder },
    });

    res.json(cities);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addCity = async (req, res) => {
  const { name, location } = req.body;

  try {
    const newCity = await new City({ name, location }).save();
    res.json(newCity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getCities, addCity };
