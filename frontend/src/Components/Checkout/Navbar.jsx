import React from "react";
import { AppBar, makeStyles } from "@material-ui/core";
import Logo from "../Navbar/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    flexDirection: "row",
    color: "#888888",
    alignItems: "center",
    boxShadow: "0px 0px 1px 0px",
    padding: "0.5rem 1rem !important",
  },
  flex: {
    display: "flex",
    marginLeft: "36%",
    "& div>img": {
      width: "15px",
      height: "15px",
      marginTop: "1.5%",
    },
  },
  margin: {
    display: "flex",
  },
  p: {
    width: "300px",
    margin: "1%",
    marginLeft: "-10%",
  },
  p1: {
    width: "250px",
    margin: "1%",
    marginLeft: "-10%",
  },
  p2: {
    width: "200px",
    margin: "1%",
    marginLeft: "-10%",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.root}>
        <div>
          <Logo />
        </div>
        <div className={classes.flex}>
          <div className={classes.margin}>
            <img
              src="https://grofers.com/images/checkout/replacement-guarantee_2x-2c251a6.png"
              alt=""
            />
            <p className={classes.p}>100% Replacement Guarantee</p>
          </div>
          <div className={classes.margin}>
            <img
              src="https://grofers.com/images/checkout/genuine-products_2x-13547cb.png"
              alt=""
            />
            <p className={classes.p1}>100% Genuine Products</p>
          </div>
          <div className={classes.margin}>
            <img
              src="https://grofers.com/images/checkout/secure-payments_2x-cd80dcf.png"
              alt=""
            />
            <p className={classes.p2}>Secure Payments</p>
          </div>
        </div>
      </AppBar>
    </>
  );
}
