import React from "react";
import Carousel from "react-material-ui-carousel";
import styles from "./product.module.css";

export default function ProductImage(props) {
  return (
    <div className={styles.imageBox}>
      <Carousel
        autoPlay="false"
        animation="slide"
        navButtonsAlwaysVisible="true"
        fullHeightHover="false"
      >
        {props.images.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" width="408px" height="408px" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
