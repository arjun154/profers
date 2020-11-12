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

  const addItem = (id, item) => {
    // console.log(id, item);
    // const id = item.varieties[0]._id;
    dispatch(addToCart(id, item));
  };

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
      <Button onClick={() => addItem(item._id, item.name)} />
    </Card>
  );
};

export default ProductCard;
