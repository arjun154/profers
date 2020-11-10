import React from "react";
import Category from "../../Components/Category/index";
import styles from "./home.module.css";
import Categories from "./Categories";

function Home() {
  return (
    <div className={styles.root}>
      <div>
        <Categories />
      </div>
      <div className={styles.images}>
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=280/layout-engine/2020-10/Diwali20_HFS_mastheads_web_0.jpg"
          alt="offer"
        />
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=267/layout-engine/2020-10/HDFC-bank_static_4.jpg"
          alt="hdfcOffer"
        />
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=267/layout-engine/2020-10/Axis-Bank_static_1_1.jpg"
          alt="axisOffer"
        />
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=280/layout-engine/2020-11/ICICI-CCDC_WEB.jpg"
          alt="ICICI"
        />
      </div>
      <Category label="Fresh Fruits and Veggies" url="" />
      <Category label="Festive Joy" url="" />
      <Category label="Top Staples" url="" />
      <Category label="Top Savers Today!" url="" />
    </div>
  );
}

export default Home;
