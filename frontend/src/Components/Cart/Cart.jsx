import React from "react";
import Styles from "./style.module.css";
import { Box, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import CartListItem from "./CartListItem";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    background: "#eee",
  },
  cardMiddle: {
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
  link: {
    textDecoration: "none",
    color: "white ",
  },
}));

const Cart = ({ toggleDrawer }) => {
  const classes = useStyles();
  const history = useHistory();

  const { count, items } = useSelector((state) => state.cart);

  let totalSaved = 0;

  const subTotal = Object.keys(items)
    .map((key) => {
      const totalPrice = items[key].varieties[0].price * items[key].qty;
      const totalSale = (totalPrice * items[key].varieties[0].sale) / 100;
      totalSaved += totalSale;
      return totalPrice - totalSale;
    })
    .reduce((a, c) => a + c, 0);

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

      {/* If no items then this div */}
      {Object.keys(items).length === 0 ? (
        <Box className={classes.cardMiddle}>
          <>
            <img
              src="https://grofers.com/images/cart/empty-cart_2x-da3645a.png"
              alt="img"
              className={Styles.cartLogo}
            />
            <div className={Styles.itemsMsg}> No items in your cart</div>
            <div className={Styles.helperMsg}>
              Your favourite items are just a click away
            </div>
          </>
        </Box>
      ) : (
        <Box
          className={classes.cardMiddle}
          style={{ justifyContent: "flex-start" }}
        >
          <>
            <CartSummary
              subTotal={subTotal}
              totalSaved={totalSaved}
              count={count}
            />
            {Object.keys(items).map((key) => (
              <CartListItem item={items[key]} key={key} selectedId={key} />
            ))}
          </>
        </Box>
      )}

      <Box textAlign="center" padding="0.5rem 0">
        <button className={Styles.btnShop}>
          {count > 0 ? (
            <Box
              display="flex"
              fontWeight="600"
              alignItems="center"
              justifyContent="space-between"
            >
              <div>
                <Link to="/checkout" className={classes.link}>
                  {" "}
                  Proceed to Checkout
                </Link>
              </div>
              <Box display="flex" alignItems="center">
                ₹{subTotal} <ArrowForwardIosIcon style={{ height: 14 }} />{" "}
              </Box>
            </Box>
          ) : (
            "Start Shopping"
          )}
        </button>
      </Box>
    </div>
  );
};

export default Cart;
