import React from "react";
import styles from "./productCard.module.css";
import Button from "../Button/index";
import { Box, Card } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/cart/actions";
import SquareSmallButton from "../Button/SquareSmallButton";

const ProductCard = ({ item }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const addItem = (id, item) => {
    dispatch(addToCart(id, item));
  };

  let qty = 0;
  if (items[item._id]) {
    qty = items[item._id].qty;
  }

  return (
    <Card key={item._id} className={styles.root}>
      <div onClick={() => history.push(`/productCate/${item.name}`)}>
        <div>
          <img
            src={item.images[0].location}
            alt="item"
            height="250px"
            width="250px"
          ></img>
        </div>
        <div className={styles.pricebox}>
          <div className={styles.price}>₹{item.varieties[0].price}</div>
          <div className={styles.discount}>₹{"hola hu"}</div>
        </div>
        <div className={styles.text}>
          <div className={styles.description}>{item.name}</div>
          <div className={styles.unit}>{item.varieties[0].size}</div>
        </div>
      </div>
      {qty > 0 ? (
        <Box
          display="flex"
          margin="12px 0"
          justifyContent="space-between"
          alignItems="center"
        >
          <SquareSmallButton
            label="-"
            onClick={() => dispatch(removeFromCart(item._id))}
          />
          <p>{qty}</p>

          <SquareSmallButton
            label="+"
            onClick={() => addItem(item._id, item)}
          />
        </Box>
      ) : (
        <Button onClick={() => addItem(item._id, item)} />
      )}
    </Card>
  );
};

export default ProductCard;
