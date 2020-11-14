const { requestOTP, validateOtp } = require("../controllers/user-controller");
const {
  getAllAddresses,
  addAddress,
  deleteAddress,
  updateAddress,
} = require("../controllers/profile-controller");
const { authMiddleware } = require("../middleware/authMiddleware");

const routes = require("express").Router();

routes.get("/addresses", authMiddleware, getAllAddresses);
routes.post("/addresses", authMiddleware, addAddress);
routes.delete("/addresses/:id", authMiddleware, deleteAddress);
routes.patch("/addresses/:id", authMiddleware, updateAddress);

routes.get("/:phone", requestOTP);
routes.post("/:phone", validateOtp);

module.exports = routes;
