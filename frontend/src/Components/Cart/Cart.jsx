import React from "react";
import Styles from "./style.module.css";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  cardMiddle: {
    padding: "0.5rem  1rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",

    "& > img": {
      margin: "1rem 0",
    },
  },
}));

const Cart = ({ toggleDrawer }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} role="presentation">
      <div className={Styles.cartHeader}>
        <div>My Cart</div>
        <div
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          className={Styles.closeBtn}
        >
          ×
        </div>
      </div>

      <Box className={classes.cardMiddle}>
        {/* If no items then this div */}
        <img
          src="https://grofers.com/images/cart/empty-cart_2x-da3645a.png"
          alt="img"
          className={Styles.cartLogo}
        />
        <div className={Styles.itemsMsg}> No items in your cart</div>
        <div className={Styles.helperMsg}>
          Your favourite items are just a click away
        </div>
      </Box>

      <Box textAlign="center" padding="0.5rem 0">
        <button className={Styles.btnShop}>Start Shopping</button>
      </Box>
    </div>
  );
};

export default Cart;
