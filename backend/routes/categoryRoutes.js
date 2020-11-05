const route = require("express").Router();
const paginate = require("../utils/paginate");

route.get("/", (req, res) => {}, paginate(req, res));
