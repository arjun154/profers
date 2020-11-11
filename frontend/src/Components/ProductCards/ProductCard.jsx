import React from "react";
import styles from "./productCard.module.css";
import Button from "../Button/index";
import { Card } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cart/actions";

const ProductCard = ({ item }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const addItem = () => {
    const id = item.varieties[0]._id;
    dispatch(addToCart(id, item));
  };

  return (
    <Card key={item.id} className={styles.root}>
      <div onClick={() => history.push(`/productCate/${item.id}`)}>
        <div>
          <img src={item.img} alt=""></img>
        </div>
        <div className={styles.pricebox}>
          <div className={styles.price}>₹{item.discountedPrice}</div>
          <div className={styles.discount}>₹{item.actualPrice}</div>
        </div>
        <div className={styles.text}>
          <div className={styles.description}>{item.productName}</div>
          <div className={styles.unit}>{item.productDetail}</div>
        </div>
      </div>
      <Button onClick={() => console.log("clicked")} />
    </Card>
  );
};

export default ProductCard;
