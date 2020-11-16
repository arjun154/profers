import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const useStyels = makeStyles((theme) => ({
  text: {
    height: 17,
    width: 17,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    borderRadius: "50%",
    position: "absolute",

    top: 15,
    fontSize: "12px",
    left: 30,
    backgroundColor: "#e96125",
  },
}));

const Icon = ({ onClick, className, count }) => {
  const classes = useStyels();

  const { items } = useSelector((state) => state.cart);

  const subTotal = Object.keys(items)
    .map((key) => {
      const totalPrice = items[key].varieties[0].price * items[key].qty;
      const totalSale = (totalPrice * items[key].varieties[0].sale) / 100;
      return totalPrice - totalSale;
    })
    .reduce((a, c) => a + c, 0);

  return (
    <div
      className={className}
      style={{ position: "relative" }}
      onClick={onClick}
    >
      <i
        className="far fa-shopping-cart"
        style={subTotal ? { marginRight: 20 } : {}}
      ></i>
      {subTotal ? <>₹{subTotal.toFixed(2)}</> : "Cart"}
      {count > 0 && <div className={classes.text}>{count}</div>}
    </div>
  );
};

export default Icon;
