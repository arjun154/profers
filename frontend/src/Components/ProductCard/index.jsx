import React from "react";
import styles from "./productCard.module.css";
import Button from "../Button/index";
import Box from "@material-ui/core/Box";
import { Card } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function ProductCard(props) {
  const history = useHistory();

  return (
    <Box display="flex" flexDirection="row" className={styles.box}>
      {props.items.map((item) => (
        <Card
          key={item.id}
          className={styles.root}
          onClick={() => history.push(`/productCate/${item.id}`)}
        >
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
          <Button />
        </Card>
      ))}
    </Box>
  );
}
