import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.css";
import Axios from "axios";
import { useSelector } from "react-redux";

export default function Payment({ address }) {
  const { items } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);

  const subTotal = Object.keys(items)
    .map((key) => {
      const totalPrice = items[key].varieties[0].price * items[key].qty;
      const totalSale = (totalPrice * items[key].varieties[0].sale) / 100;
      return totalPrice - totalSale;
    })
    .reduce((a, c) => a + c, 0);

  const paymentHandler = async () => {
    const API_URL = "http://localhost:8000/api/V1/accounts";
    const orderUrl = `${API_URL}/order?price=${subTotal}`;

    const response = await Axios.get(orderUrl, {
      headers: { authorization: `Bearer ${token}` },
      data: { items, address },
    });
    const { data } = response;

    console.log(data);
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
    <div>
      <Typography style={{ marginRight: "2.5rem" }}>3</Typography>
      <div style={{ width: "100%" }}>
        <Typography style={{ color: "#999" }}>Payment</Typography>

        <button className={styles.paymentBtn} onClick={paymentHandler}>
          Pay Now
        </button>
      </div>
    </div>
  );
}
