import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",

    "&  hover": {
      backgroundColor: "#2d3133 !important",
    },
  },
  img: {
    height: "36px",
    paddingRight: "1.2rem",
    borderRight: "1px solid hsla(0, 0%, 100%, 0.08)",
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
