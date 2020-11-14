import { makeStyles } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.css";
import Axios from "axios";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  flex: {
    marginTop: "15px",
    display: "flex",
    "& p": {
      marginLeft: "5%",
      color: "green",
      border: "1px solid green",
    },
    "& div": {
      marginLeft: "5%",
      color: "black",
      fontWeight: "bold",
      letterSpacing: "1px",
    },
  },
  two: {
    border: "1px solid #e96125",
    borderRadius: "50%",
    width: "20px",
  },
}));

export default function Payment() {
  const classes = useStyles();

  const { items } = useSelector((state) => state.cart);

  const subTotal = Object.keys(items)
    .map((key) => {
      const totalPrice = items[key].varieties[0].price * items[key].qty;
      const totalSale = (totalPrice * items[key].varieties[0].sale) / 100;
      return totalPrice - totalSale;
    })
    .reduce((a, c) => a + c, 0);
  const paymentHandler = async () => {
    const API_URL = "http://localhost:8000/";
    const orderUrl = `${API_URL}order?total=${subTotal}`;
    const response = await Axios.get(orderUrl);
    const { data } = response;
    const options = {
      name: "Profers RazorPay",
      description: "Integration of Razorpay",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `${API_URL}capture/${paymentId}`;
          const captureResponse = await Axios.post(url, {
            total: subTotal,
          });
          const successObj = JSON.parse(captureResponse.data);
          const captured = successObj.captured;
          if (captured) {
            console.log("success");
          }
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#c6203d",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  return (
    <>
      <div>
        <div className={classes.flex}>
          <p className={classes.two}>3</p>
          <div>Payment</div>
        </div>
      </div>
      <div>
        <button className={styles.paymentBtn} onClick={paymentHandler}>
          Pay Now
        </button>
      </div>
    </>
  );
}
