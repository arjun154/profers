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
      </div>
      <Category
        label="Fresh Fruits and Veggies"
        query="Vegetables %26 Fruits"
      />
      <img
        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=280/layout-engine/2020-11/ICICI-CCDC_WEB.jpg"
        alt="ICICI"
      />
      <Category label="Grocery & Staples" query="Grocery %26 Staples" />
      <img
        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=267/layout-engine/2020-10/HDFC-bank_static_4.jpg"
        alt="hdfcOffer"
      />
      <Category
        label="Biscuits & Chocolates"
        query="Biscuits, Snacks %26 Chocolates"
      />
      <img
        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=267/layout-engine/2020-10/Axis-Bank_static_1_1.jpg"
        alt="axisOffer"
      />
      <Category label="Tea and Drinks" query="Beverages" />
    </div>
  );
}

export default Home;
