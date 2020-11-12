import React from "react";
import styles from "./product.module.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/cart/actions";
import { Box } from "@material-ui/core";
import SmallRoundButton from "../Button/SmallRoundButton";

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

export default function PriceBox(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  let qty = 0;
  if (items[props.wholeItem._id]) {
    qty = items[props.wholeItem._id].qty;
  }

  console.log(props.wholeItem);

  return (
    <>
      <div className={styles.productDetails}>
        <div className={styles.productName}>
          <h3 className={styles.head}>{props.item.name}</h3>
          {/* make link for G fresh */}
          <h4>
            <span className={styles.span}>More by</span>
            <span className={styles.spanlink}>G Fresh ></span>
          </h4>
          <div>
            <div>
              <span className={styles.pmrp}>Product MRP:</span>
              <span className={styles.mrp}>₹{props.item.price}</span>
            </div>
            <div className={styles.taxDisclamer}>(Inclusive of all taxes)</div>
          </div>
          <div>
            <div className={styles.productVariant}>Available in</div>
            <Button variant="outlined" className={classes.root}>
              {props.item.size}
            </Button>
          </div>
          <div style={{ maxWidth: "150px" }}>
            {!qty ? (
              <Button
                onClick={() =>
                  dispatch(addToCart(props.wholeItem._id, props.wholeItem))
                }
                variant="contained"
                className={classes.cartButton}
              >
                Add To cart
              </Button>
            ) : (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <SmallRoundButton
                  label="-"
                  style={{ fontSize: "18px", width: "35px", height: "35px" }}
                  onClick={() => dispatch(removeFromCart(props.wholeItem._id))}
                />
                {qty}
                <SmallRoundButton
                  label="+"
                  style={{ fontSize: "18px", width: "35px", height: "35px" }}
                  onClick={() =>
                    dispatch(addToCart(props.wholeItem._id, props.wholeItem))
                  }
                />
              </Box>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
