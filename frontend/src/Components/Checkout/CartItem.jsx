import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    lineHeight: 1.5,
    alignItems: "center",
    "& div": {
      flex: 1,
    },
    "& p": {
      marginRight: "1%",
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

export default function CartItem() {
  const classes = useStyles();

  //   const imgUrl = images[0].location;
  //   const { name, images, qty } = item;
  //   const selectedVariety = item.varieties[0];
  //   const { price, size, sale } = selectedVariety;
  //   const realPriceAfterDiscount = price - (price * sale) / 100;
  return (
    <>
      <div className={classes.flex}>
        <div>My cart</div>
        <div>Items</div>
      </div>
      {/* <div className={classes.flex}>
        <p>qty</p>
        <img src={imgUrl} alt={name + ".png"} />
        <div>
          {sale > 0 && <div className={classes.saleTag}>{sale}% OFF</div>}
          <p>
            {name} - {size}
          </p>
          <p>{qty}</p> <div>₹{realPriceAfterDiscount * qty}</div>
        </div>
      </div> */}
    </>
  );
}
