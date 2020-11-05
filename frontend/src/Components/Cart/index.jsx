import React from "react";
import clsx from "clsx";
import Styles from "./style.module.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 450,
  },
  fullList: {
    width: "auto",
  },
}));

const Cart = ({ toggleDrawer }) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: 'left' === "left",
      })}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={Styles.cartHeader}>
        <div style={{ float: "left" }}>My Cart</div>
        <div className={Styles.closeBtn}>×</div>
      </div>
      <img
        src="https://grofers.com/images/cart/empty-cart_2x-da3645a.png"
        alt="img"
        className={Styles.cartLogo}
      />
      <div className={Styles.itemsMsg}> No items in your cart</div>
      <div className={Styles.helperMsg}>
        Your favourite items are just a click away
      </div>
      <div>
        <button className={Styles.btnShop}>Start Shopping</button>
      </div>
    </div>
  );
};

export default Cart;
