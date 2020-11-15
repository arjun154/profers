const { requestOTP, validateOtp } = require("../controllers/user-controller");
const {
  getAllAddresses,
  addAddress,
  deleteAddress,
  updateAddress,
} = require("../controllers/profile-controller");
const { getAllOrders, order } = require('../controllers/orders-controller')
const { authMiddleware } = require("../middleware/authMiddleware");

const routes = require("express").Router();

// address routes
routes.get("/addresses", authMiddleware, getAllAddresses);
routes.post("/addresses", authMiddleware, addAddress);
routes.delete("/addresses/:id", authMiddleware, deleteAddress);
routes.patch("/addresses/:id", authMiddleware, updateAddress);

//order routes
routes.get('/orders', authMiddleware, getAllOrders)
routes.post('/orders', authMiddleware, order)

// user login/register routes
routes.get("/:phone", requestOTP);
routes.post("/:phone", validateOtp);

module.exports = routes;
