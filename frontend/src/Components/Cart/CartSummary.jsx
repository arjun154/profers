import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "left",
    marginBottom: "1rem",
    background: "#fff",
    color: "#666",
    "& > div": {
      padding: "0.5rem 1rem",
      display: "flex",
      justifyContent: "space-between",

      "& p": {
        padding: "0.3rem 0",
      },
    },

    "& > div:first-child": {
      borderBottom: "1px solid #ccc",
    },
  },
}));

export default function CartSummary({ subTotal, totalSaved, count }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div>
          <p>Sub Total</p>
          <p>Delivery Charges</p>
        </div>
        <div>
          <p>₹{subTotal.toFixed(2)}</p>
          <p style={{ color: "green" }}>Free</p>
        </div>
      </div>
      {totalSaved > 0 && (
        <div>
          <p>Your total savings</p>
          <p style={{ color: "#f34343" }}> ₹{totalSaved.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
