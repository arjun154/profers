import React from "react";
import Styles from "./styles.module.css";
import Common from "./index";

export default function orders() {
  return (
    <>
      <div className={Styles.root}>
        <Common />
        <div className={Styles.dataDisplay}>
          <img
            src="https://grofers.com/images/cart/empty-cart_2x-da3645a.png"
            alt="emptyLogo"
            height="200px"
          />
          <div className={Styles.heading}>
            You have not placed an order with us yet
          </div>
          <div className={Styles.subHeading}>Let’s get you started</div>
          <button className={Styles.shoppingBtn}>Start Shopping</button>
        </div>
      </div>
    </>
  );
}
