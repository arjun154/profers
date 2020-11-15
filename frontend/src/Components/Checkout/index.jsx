import { makeStyles } from "@material-ui/core";
import React from "react";
import CartItems from "./CartItems";
import Navbar from "./Navbar";
import Phone from "./Phone";
import Proceed from "./Proceed";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    display: "flex",
    width: "600px",
    margin: "2rem auto",
    alignItems: "center",
  },
}));

export default function Checkout() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.content}>
        <Phone />
        <CartItems />
      </div>
    </>
  );
}
