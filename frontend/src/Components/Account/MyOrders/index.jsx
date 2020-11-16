import React from "react";
import Styles from "./myOrders.module.css";
import { useHistory } from "react-router-dom";
import { Collapse, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Index() {
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={Styles.dataDisplay}>
        <div className={Styles.top}>
          <span></span>Placed Yesterday, 3:27 AM
        </div>
        <div>
          <div>Status</div>
          <div>
            <div>Super Store - East of Kailash. 159</div>
            <div>order ID: ORD982347943 . 1 item</div>
          </div>
        </div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <div>
            <div>
              <div>Delivery Address</div>
              <div>Badnaam GAli</div>
            </div>
            <hr />
            <div>
              <div>Payment</div>
              <div>
                <div>
                  <span>Subtotal</span>
                  <span>110</span>
                </div>
                <div>
                  <span>Delivery Charges</span>
                  <span>49</span>
                </div>
                <hr />
                <div>
                  <span>
                    Payable Amount<span>(incl. of all taxes)</span>
                  </span>
                  <span>159</span>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div>Payment Option</div>
              <div>Pay on Delivery</div>
            </div>
          </div>
        </Collapse>
      </div>
      {/* <div className={Styles.dataDisplay}>
        <img
          src="https://grofers.com/images/cart/empty-cart_2x-da3645a.png"
          alt="emptyLogo"
          height="200px"
        />
        <div className={Styles.heading}>
          You have not placed an order with us yet
        </div>
        <div className={Styles.subHeading}>Let’s get you started</div>
        <button
          className={Styles.shoppingBtn}
          onClick={() => history.push(`/`)}
        >
          Start Shopping
        </button>
      </div>
     */}
    </>
  );
}
