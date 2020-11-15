import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 14,
    overflow: "hidden",
    width: "300px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 0.5rem",
    backgroundColor: "#f4f4f4",
  },
  item: {
    lineHeight: 1.5,
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    "& div": {
      flex: 1,
    },
    "& p": {
      marginRight: "1%",
    },
  },
  img: {
    width: 80,
    margin: "0 0.5rem",
  },
  saleTag: {
    color: "green",
    border: "2px solid green",
    borderRadius: "4px",
    fontSize: "12px",
    display: "inline-block",
    padding: "0 0.2rem",
    margin: "0 !important",
    backgroundColor: "#67f76747",
  },
  description: {
    textAlign: "left",
  },
}));

const CartItem = ({ item, index }) => {
  const classes = useStyles();

  const { images, name, qty, varieties } = item;

  const { sale, size, price } = varieties[0];

  return (
    <div className={classes.item}>
      <p>{qty}</p>
      <img
        className={classes.img}
        src={images[0]?.location}
        alt={name + ".png"}
      />
      <div className={classes.description}>
        {sale > 0 && <div className={classes.saleTag}>{sale}% OFF</div>}
        <p>{name}</p>
        <p style={{ color: "#999" }}>{size}</p>
        <div style={{ fontWeight: 600 }}>₹{price}</div>
      </div>
    </div>
  );
};

export default function CartItems() {
  const classes = useStyles();

  const { items } = useSelector((state) => state.cart);
  const totalItems = Object.values(items).reduce((a, item) => a + item.qty, 0);

  return (
    <Card>
      <div className={classes.root}>
        <div className={classes.header}>
          <div>My cart</div>
          <div> {totalItems} Items</div>
        </div>

        {Object.values(items).map((item, i) => {
          return <CartItem key={item._id} item={item} />;
        })}
      </div>
    </Card>
  );
}
