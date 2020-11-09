const Joi = require("joi");
const NodeCache = require("node-cache");
const sendOtp = require("../utils/sendOtp");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

const otpCache = new NodeCache();

dotenv.config();

const validateRequestPhone = (data) => {
  const schema = Joi.object({
    phone: Joi.string().min(10).max(10).required(),
  });

  return schema.validate(data).error;
};

// default otp
otpCache.set("8279880948", "1234");

const requestOTP = async (req, res) => {
  // validate data
  const validationError = validateRequestPhone(req.params);
  if (validationError)
    return res
      .status(400)
      .json({ message: validationError.details[0].message });

  const { phone } = req.params;
  try {
    let otp;
    if (otpCache.get(phone)) {
      otp = otpCache.get(phone);
    } else {
      otp = genOtp();
      otpCache.set(phone, otp, 30);
    }
    await sendOtp(phone, otp);
    res.json({ message: "OTP Sent to your phone number!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const validateOtp = async (req, res) => {
  const validationError = validateRequestPhone(req.params);
  if (validationError)
    return res
      .status(400)
      .json({ message: validationError.details[0].message });

  const { phone } = req.params;
  const { otp } = req.body;
  try {
    const orgOtp = otpCache.get(phone);

    if (otp != orgOtp) {
      return res.status(400).json({ message: "Otp is incorrect!" });
    }

    let user = await User.findOne({ phone: phone });
    if (!user) {
      user = await new User({ phone }).save();
    }

    const token = JWT.sign({ phone: phone }, process.env.JWT_PRIVATE_KEY);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const genOtp = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

module.exports = { requestOTP, validateOtp };
