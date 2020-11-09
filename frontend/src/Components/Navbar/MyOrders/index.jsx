import React from "react";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const OrdersPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("8279880948");

  return (
    <>
      <div className={Styles.leftTabs}>
        <div className={Styles.accountLogo}>
          <img
            src="https://grofers.com/images/header/user-profile-667209e.png"
            alt="accountLogo"
          />
          <div>
            <small>+91 {phoneNumber}</small>
          </div>
        </div>
        <div className={Styles.tabs}>
          <div className={Styles.tabPanel}>
            <Link to="/account/addresses" className={Styles.link}>
              <i class="fal fa-map-marked-alt"></i> My Addresses
            </Link>
          </div>
          <div className={Styles.tabPanel}>
            <Link to="/account/orders" className={Styles.link}>
              <i class="fal fa-business-time"></i> My Orders
            </Link>
          </div>
          <div className={Styles.tabPanel}>
            <i
              class="fal fa-rupee-sign"
              style={{
                border: "1px solid grey",
                padding: "2px 5px",
                borderRadius: "50%",
              }}
            ></i>{" "}
            My Wallet
          </div>
          <div className={Styles.tabPanel}>
            {" "}
            <i class="fal fa-user"></i> Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
