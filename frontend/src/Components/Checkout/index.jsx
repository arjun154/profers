import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import CartItems from "./CartItems";
import Navbar from "./Navbar";
import Phone from "./Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  content: {
    display: "flex",
    width: "1000px",
    margin: "2rem auto",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
}));

export default function Checkout() {
  const classes = useStyles();

  const { auth } = useSelector((state) => state.auth);
  if (!auth) alert("Please login before!");
  if (!auth) return <Redirect path="/" />;

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.content}>
        <Phone />
        <CartItems />
      </div>
    </div>
  );
}
