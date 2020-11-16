import { makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/cart/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0.05rem 0",
    display: "flex",
    padding: "0.5rem",
    width: "100%",
    background: "#fff",
    fontSize: "13px",
    color: "#666",
  },
  imgWrapper: {
    "&>img": {
      width: "80px",
    },
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& > div": {
      display: "flex",
      alignItems: "center",
    },
  },
  details: {
    width: "100%",
    textAlign: "left",
    "& > *": {
      margin: "0.5rem 0",
    },
    "&> p": {
      textAlign: "left",
      fontSize: "14px",
      padding: "0.3rem 0",
    },

    "& button": {
      border: "1px solid orange",
      borderRadius: "50%",
      padding: "0.2rem",
      background: "#fff",
      margin: "0 0.5rem",
      width: 25,
      height: 25,

      "&:focus": {
        outline: "none",
      },
    },
    "& p": {
      margin: "0 0.3rem",
    },
  },
  saleTag: {
    color: "green",
    border: "2px solid green",
    borderRadius: "4px",
    fontSize: "12px",
    display: "inline-block",
    padding: "0.2rem",
    margin: "0 !important",
  },
}));

export default function CartListItem({ item, selectedId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { name, images, qty } = item;
  const imgUrl = images[0].location;
  const selectedVariety = item.varieties[0];
  const { price, size, sale } = selectedVariety;

  const realPriceAfterDiscount = price - (price * sale) / 100;
  return (
    <div className={classes.root}>
      <div className={classes.imgWrapper}>
        <img src={imgUrl} alt={name + ".png"} />
      </div>
       
      <div className={classes.details}>
        {sale > 0 && <div className={classes.saleTag}>{sale}% OFF</div>}
        <p>
          {name} - {size}
        </p>
        <div className={classes.options}>
          <div>
            <button onClick={() => dispatch(removeFromCart(item._id))}>
              -
            </button>
            <p>{qty}</p>
            <button onClick={() => dispatch(addToCart(item._id, item))}>
              +
            </button>
            <p>x</p>
            <p>₹{realPriceAfterDiscount}</p>
            {sale > 0 && (
              <p style={{ textDecoration: "line-through", color: "#999" }}>
                ₹{price}
              </p>
            )}
          </div>
           <div>₹{(realPriceAfterDiscount * qty).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
