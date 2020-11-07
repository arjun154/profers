import React from "react";
import styles from "./product.module.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    color: "#e96125",
    cursor: "pointer",
    margin: "12px 16px 12px 0px",
    textTransform: "none",
    borderColor: "#e96125",
    "&:hover": {
      background: "#fff",
    },
  },
  cartButton: {
    backgroundColor: "#e96125",
    color: "#fff",
    "&:hover": {
      background: "#e96125",
    },
  },
});

export default function PriceBox() {
  const classes = useStyles();

  return (
    <>
      <div className={styles.productDetails}>
        <div className={styles.productName}>
          <h3 className={styles.head}>G Fresh Pomegranate(Anaar)</h3>
          {/* make link for G fresh */}
          <h4>
            <span className={styles.span}>More by</span>
            <span className={styles.spanlink}>G Fresh ></span>
          </h4>
          <div>
            <div>
              <span className={styles.pmrp}>Product MRP:</span>
              <span className={styles.mrp}>₹104.00</span>
            </div>
            <div className={styles.taxDisclamer}>(Inclusive of all taxes)</div>
          </div>
          <div>
            <div className={styles.productVariant}>Available in</div>
            <Button variant="outlined" className={classes.root}>
              2Units (400-500 g)
            </Button>
          </div>
          <div>
            <Button variant="contained" className={classes.cartButton}>
              Add To cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
