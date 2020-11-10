import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "white",
    margin: "0.5% 3%",
    marginTop: "0%",
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    "& img": {
      width: "60px",
    },
    "& div": {
      fontSize: "12px",
      margin: "1.5% 0%",
      fontFamily: "Celias,Helvetica",
      textAlign: "center",
      color: "#333",
    },
  },
}));
export default function Categories() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div>
          <img
            src="https://webcdn.grofers.com/cdn/pdp/category-l0-16.jpg"
            alt="grocery"
          />
          <div>Grocery and staples</div>
        </div>
        <div>
          <img
            src="https://webcdn.grofers.com/cdn/pdp/category-l0-1487.jpg"
            alt="veggies and fruits"
          />
          <div>Vegetables and Fruits</div>
        </div>
        <div>
          <img
            src="https://webcdn.grofers.com/cdn/pdp/category-l0-13.jpg"
            alt="snacks"
          />
          <div>Biscuits, Snacks & Chocolates</div>
        </div>
        <div>
          <img
            src="https://webcdn.grofers.com/cdn/pdp/category-l0-12.jpg"
            alt="beverages"
          />
          <div>Beverages</div>
        </div>
        <div>
          <img
            src="https://webcdn.grofers.com/cdn/pdp/category-l0-14.jpg"
            alt="dairy"
          />
          <div>Breakfast & Dairy</div>
        </div>
        <div>
          <img
            src="https://webcdn.grofers.com/cdn/pdp/category-l0-15.jpg"
            alt="instant food"
          />
          <div>Noodles, Sauces & Instant Food</div>
        </div>
      </div>
    </div>
  );
}
