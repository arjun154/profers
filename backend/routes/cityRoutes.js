const routes = require("express").Router();
const { getCities, addCity } = require("../controllers/city-controller");
const queryParser = require("../middleware/queryParser");

routes.get("/", queryParser, getCities);
routes.post("/", addCity);

module.exports = routes;
