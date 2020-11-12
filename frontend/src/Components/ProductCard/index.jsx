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
          key={item._id}
          className={styles.root}
          onClick={() => history.push(`/productCate/${item.name}`)}
        >
          <div>
            <img
              src={item.images[0].location}
              alt="item"
              height="256px"
              width="100%"
            ></img>
          </div>
          <div className={styles.pricebox}>
            <div className={styles.price}>₹{item.varieties[0].price}</div>
            <div className={styles.discount}>₹{"hola"}</div>
          </div>
          <div className={styles.text}>
            <div className={styles.description}>{item.name}</div>
            <div className={styles.unit}>{item.varieties[0].size}</div>
          </div>
          <Button />
        </Card>
      ))}
    </Box>
  );
}
