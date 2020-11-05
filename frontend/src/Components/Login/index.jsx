import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { requestOtp, validateOtp } from "../../Redux/auth/actions";
import OTPInput from "../OTPInput";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    outline: "none",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 15, 5),
    textAlign: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: "lighter",
    marginBottom: "80px",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [phoneNumber, setPhoneNumber] = useState("8279880948");
  const [otp, setOtp] = useState("");

  const dispatch = useDispatch();
  const { otpSend } = useSelector((state) => state.auth);

  const handleRequestOtp = () => {
    dispatch(requestOtp(phoneNumber));
  };

  const handleValidateOtp = () => {
    dispatch(validateOtp(phoneNumber, otp));
  };

  return (
    <>
      <div className={classes.paper}>
        <div className={classes.title}>Phone Number Verification</div>
        <h4 style={{ fontWeight: "500", lineHeight: 1.5 }}>
          {otpSend ? (
            <>
              Enter 4 digit code sent to your phone
              <br />
              +91-{phoneNumber}
            </>
          ) : (
            <>
              Enter your phone number to <br />
              Login/Sign up{" "}
            </>
          )}
        </h4>

        {otpSend ? (
          <div>
            <OTPInput length={4} onChange={(otp) => setOtp(otp)} />
            <button
              className={styles.next}
              disabled={Boolean(otp.length !== 4)}
              onClick={handleValidateOtp}
            >
              Next
            </button>
          </div>
        ) : (
          <>
            {/* Number input */}
            <div class={styles.inputWithIcon}>
              <input
                type="text"
                maxLength="10"
                value={phoneNumber}
                className={styles.phone}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <i class="far fa-mobile">
                <span style={{ color: "black" }}>+91-</span>
              </i>
            </div>
            <button
              className={styles.next}
              disabled={Boolean(phoneNumber.length !== 10)}
              onClick={handleRequestOtp}
            >
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
