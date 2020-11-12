const { addItem, getItems } = require("../controllers/item-controller");
const { getByCategory } = require("../controllers/itemByCategories-controller");
const queryParser = require("../middleware/queryParser");
const uploadImages = require("../utils/uploadImages");

const routes = require("express").Router();

routes.get("/getBy/:category", queryParser, getByCategory);
routes.get("/", queryParser, getItems);
routes.post("/", uploadImages.array("photos", 12), addItem);

module.exports = routes;
