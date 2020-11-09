const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/User");

dotenv.config();

const authMiddleware = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const token = authorization.split(" ")[1];

  if (!token) return res.status(500).json({ message: "Token is not valid!" });

  try {
    const { phone } = jwt.decode(token, process.env.JWT_PRIVATE_KEY);
    if (!phone) return res.status(500).json({ message: "Token is not valid!" });
    const user = await User.findOne({ phone });

    if (!user) return res.status(500).json({ message: "No user found!" });

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { authMiddleware };
