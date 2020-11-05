import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    cursor: "pointer",
    verticalAlign: "middle",
  },
  img: {
    height: "36px",
    width: "36px",
    padding: "12px 28px",
    display: "block",
    marginLeft: "-30px",
    borderRight: "1px solid hsla(0, 0%, 100%, 0.08)",

    "&  hover": {
      backgroundColor: "#2d3133 !important",
    },
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src="https://grofers.com/images/header/logo_2x-72edeee.png"
        alt="logo"
        className={classes.img}
      />
    </div>
  );
};

export default Logo;
