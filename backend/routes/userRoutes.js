const { requestOTP, validateOtp } = require("../controllers/user-controller");
const {
  getAllAddresses,
  addAddress,
  deleteAddress,
  updateAddress,
} = require("../controllers/profile-controller");
const { getAllOrders, order, captureOrder } = require('../controllers/orders-controller')
const { authMiddleware } = require("../middleware/authMiddleware");

const routes = require("express").Router();

// address routes
routes.get("/addresses", authMiddleware, getAllAddresses);
routes.post("/addresses", authMiddleware, addAddress);
routes.delete("/addresses/:id", authMiddleware, deleteAddress);
routes.patch("/addresses/:id", authMiddleware, updateAddress);

//order routes
routes.get('/getOrders', authMiddleware, getAllOrders)
routes.post('/order/caputer/:paymentId', authMiddleware, captureOrder)
routes.post('/order', authMiddleware, order)

// user login/register routes
routes.get("/:phone", requestOTP);
routes.post("/:phone", validateOtp);

module.exports = routes;
