const routes = require("express").Router();
const {
  getCategories,
  addCategory,
} = require("../controllers/category-controller");
const queryParser = require("../middleware/queryParser");

routes.get("/", queryParser, getCategories);
routes.post("/", addCategory);

module.exports = routes;
