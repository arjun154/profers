import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyels = makeStyles((theme) => ({
  text: {
    height: 15,
    width: 15,
    fontWeight: 600,
    borderRadius: "50%",
    position: "absolute",

    top: 15,
    fontSize: "12px",
    left: 30,
    backgroundColor: "#e96125",
  },
}));

const Icon = ({ onClick, className, count }) => {
  const classes = useStyels();
  return (
    <div
      className={className}
      style={{ position: "relative" }}
      onClick={onClick}
    >
      <i className="far fa-shopping-cart" style={{ marginRight: 20 }}></i>
      Cart
      {count > 0 && <div className={classes.text}>{count}</div>}
    </div>
  );
};

export default Icon;
