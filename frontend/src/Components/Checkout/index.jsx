import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import CartItems from "./CartItems";
import Navbar from "./Navbar";
import Phone from "./Phone";
import Proceed from "./Proceed";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    display: "flex",
    width: "800px",
    margin: "2rem auto",
    alignItems: "flex-start",
  },
}));

export default function Checkout() {
  const classes = useStyles();

  const { auth } = useSelector((state) => state.auth);
  if (!auth) return <Redirect path="/" />;

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
