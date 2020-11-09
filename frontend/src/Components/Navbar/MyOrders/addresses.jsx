import React from "react";
import Styles from "./styles.module.css";
import Common from "./index";

export default function addresses() {
  return (
    <div className={Styles.root}>
      <Common />
      <div className={Styles.dataDisplay}>
        <img
          src="https://grofers.com/images/profile/address/no-saved-address-c876234.png"
          alt="emptyLogo"
          height="200px"
        />
        <div className={Styles.heading}>You have no saved addresses</div>
        <div className={Styles.subHeading}>
          Tell us where you want your orders delivered
        </div>
        <button className={Styles.shoppingBtn}>Add New Address</button>
      </div>
    </div>
  );
}
