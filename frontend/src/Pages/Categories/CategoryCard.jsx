import React from "react";
import { Card } from "@material-ui/core";
import styles from "../../Components/ProductCards/productCard.module.css";
import { useParams } from "react-router-dom";

export default function CategoryCard() {
  const { category } = useParams();

  return (
    <div style={{ display: "flex", width: "90px" }}>
      <Card className={styles.root}>
        <div>
          <img
            style={{ width: "150px" }}
            src="https://cdn.grofers.com/app/images/products/normal/pro_389904.jpg"
            alt=""
          ></img>
        </div>

        <div className={styles.text}>
          <div className={styles.description} style={{ fontSize: "12px" }}>
            Profers Mother's Choice Unpolished White Urad Gota/Gola
          </div>
        </div>
        <div className={styles.pricebox} style={{ float: "left" }}>
          <div className={styles.price}>₹76</div>
          <div className={styles.discount}>₹90</div>
        </div>
        <button
          style={{
            padding: "2% 7%",
            borderRadius: "68px",
            float: "right",
            outline: "none",
            color: "#e96125",
            border: "1px solid #e96125",
          }}
        >
          Add to Cart
        </button>
      </Card>
    </div>
  );
}
