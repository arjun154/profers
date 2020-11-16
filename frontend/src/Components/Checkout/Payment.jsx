import { Card, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CustomModel from "../CustomModal";
import CancelIcon from "@material-ui/icons/Cancel";
import { useHistory } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { clearCart } from "../../Redux/cart/actions";
import api from "../../utils/api";

const useStyles = makeStyles({
  root: {},
  modal: {
    backgroundColor: "#fff",
    padding: "2rem",
    textAlign: "center",

    "&:focus": {
      outline: "none",
    },
  },
});

export default function Payment({ address, disabled }) {
  const { items } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  console.log(disabled);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const subTotal = Object.keys(items)
    .map((key) => {
      const totalPrice = items[key].varieties[0].price * items[key].qty;
      const totalSale = (totalPrice * items[key].varieties[0].sale) / 100;
      return totalPrice - totalSale;
    })
    .reduce((a, c) => a + c, 0);

  const paymentHandler = async () => {
    const orderUrl = `accounts/order?price=${Math.round(subTotal) * 100}`;

    const response = await api.post(
      orderUrl,
      { items, address },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    const { data } = response;

    const options = {
      name: "Profers RazorPay",
      description: "Integration of Razorpay",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `accounts/order/capture/${paymentId}`;
          const { data: successObj } = await api.post(
            url,
            {
              total: subTotal,
            },
            { headers: { authorization: `Bearer ${token}` } }
          );
          if (successObj.captured) {
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
              dispatch(clearCart());
              history.push("/account/orders");
            }, 1000);
          }
        } catch (err) {
          setError(true);
          setTimeout(() => setError(false), 1000);
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

        <button
          className={styles.paymentBtn}
          disabled={disabled}
          onClick={paymentHandler}
        >
          Pay Now
        </button>
      </div>
      <CustomModel open={error} handleClose={() => setError(false)}>
        <Card className={classes.modal}>
          <CancelIcon style={{ color: "red", fontSize: "128px" }} />
          <Typography variant="h5">Sorry, Payment Failed!</Typography>
        </Card>
      </CustomModel>
      <CustomModel open={success} handleClose={() => setSuccess(false)}>
        <Card className={classes.modal}>
          <CheckCircleIcon style={{ color: "green", fontSize: "128px" }} />
          <Typography variant="h5">Hurray, order successful!</Typography>
        </Card>
      </CustomModel>
    </div>
  );
}
