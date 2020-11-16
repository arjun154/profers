import React from "react";
import Styles from "./myOrders.module.css";
import { useHistory } from "react-router-dom";
import { Collapse, IconButton, StepLabel } from "@material-ui/core";
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
  const [status, setStatus] = React.useEffect("");
  const classes = useStyles();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={Styles.dataDisplay}>
        <div className={Styles.orderBox}>
          <div className={Styles.box}>
            <div className={Styles.top}>
              <div className={Styles.topDate}>Placed Yesterday, 3:27 AM</div>
            </div>
            <div className={Styles.miniView}>
              <div className={Styles.status}>
                {status ? (
                  <div className={Styles.confirm}>Confirmed</div>
                ) : (
                  <div className={Styles.cancel}>Cancelled</div>
                )}
              </div>
              <div className={Styles.orderID}>
                <div>
                  Super Store - East of Kailash.{" "}
                  <span style={{ float: "right" }}>159</span>
                </div>
                <div className={Styles.font}>
                  order ID: ORD982347943 .{" "}
                  <span style={{ float: "right" }}>1 item</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
