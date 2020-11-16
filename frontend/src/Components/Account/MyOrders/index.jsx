import React, { useEffect, useState } from "react";
import Styles from "./myOrders.module.css";
import { useHistory } from "react-router-dom";
import {
  Box,
  Collapse,
  IconButton,
  StepLabel,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import api from "../../../utils/api";
import { useSelector } from "react-redux";
import * as timeAgo from "timeago.js";
import moment from "moment";

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
  const { token } = useSelector((state) => state.auth);
  const classes = useStyles();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api
      .get("/accounts/getOrders", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setOrders(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      {orders.length > 0 ? (
        <Box display="flex" flexDirection="column">
          {orders.slice(0, 5).map((order) => (
            <div className={Styles.dataDisplay}>
              <div className={Styles.orderBox}>
                <div className={Styles.box}>
                  <div className={Styles.top}>
                    <div className={Styles.topDate} style={{ color: "#666" }}>
                      Placed {moment(order.createdAt).fromNow()}
                    </div>
                  </div>
                  <div className={Styles.miniView}>
                    <div className={Styles.status}>
                      {order.isConfirmed ? (
                        <>
                          {new Date(order.slot) > new Date() ? (
                            <>
                              <div className={Styles.confirm}>Confirmed</div>
                              <Typography
                                className={Styles.confirm}
                                style={{ color: "#999", fontSize: 14 }}
                              >
                                On The way!
                              </Typography>
                            </>
                          ) : (
                            <>
                              <div className={Styles.confirm}>Delivered</div>
                            </>
                          )}
                        </>
                      ) : (
                        <div className={Styles.cancel}>Cancelled</div>
                      )}
                    </div>
                    <div className={Styles.orderID}>
                      <div>
                        Super Store - East of Kailash.
                        <span style={{ float: "right" }}>
                          ₹{order.totalPrice}
                        </span>
                      </div>
                      <div className={Styles.font}>
                        order ID: {order._id}
                        <span style={{ float: "right" }}>
                          {order.items.length} item
                        </span>
                      </div>
                    </div>
                  </div>
                  {order.isConfirmed && new Date(order.slot) > new Date() && (
                    <Typography
                      color="textSecondary"
                      style={{ padding: "0.2rem 0", fontSize: 14 }}
                    >
                      Will be delivered at{" "}
                      {moment(order.slot).format("ddd, hA")}
                    </Typography>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Box>
      ) : (
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
          <button
            className={Styles.shoppingBtn}
            onClick={() => history.push(`/`)}
          >
            Start Shopping
          </button>
        </div>
      )}
    </>
  );
}
