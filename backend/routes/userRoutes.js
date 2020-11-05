const { requestOTP, validateOtp } = require("../controllers/user-controller");

const routes = require("express").Router();

routes.get("/:phone", requestOTP);
routes.post("/:phone", validateOtp);

module.exports = routes;
