const { default: Axios } = require("axios");
const dotenv = require("dotenv");

dotenv.config;

const sendOtp = async (number, otp) => {
  // try {
  //   await Axios.get(
  //     `https://api.msg91.com/api/sendhttp.php?authkey=346303Aou94GFnpdmh5fa264acP1&mobiles=${number}&country=91&message=Hello! This is a test message ${otp}&sender=PROFERS&route=4`
  //   );
  // } catch (error) {
  //   throw error;
  // }

  console.log(number, otp)
};

module.exports = sendOtp;
