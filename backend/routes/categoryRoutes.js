const routes = require("express").Router();
const {
  getCategories,
  addCategory,
  getSubCategories,
  addSubCategory,
} = require("../controllers/category-controller");
const queryParser = require("../middleware/queryParser");

routes.get("/", queryParser, getCategories);
routes.post("/", addCategory);
routes.get("/:category", queryParser, getSubCategories);
routes.post("/:category", addSubCategory);

module.exports = routes;
