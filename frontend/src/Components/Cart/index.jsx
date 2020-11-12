import { Drawer, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Cart from "./Cart";
import CartIcon from "./Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    alignSelf: "stretch",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#2d3133",
    },
    "& i": {
      marginRight: "0.5rem",
    },
  },
}));

const CartComponent = () => {
  const [state, setState] = useState({ left: false });
  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <CartIcon
        className={classes.root}
        onClick={toggleDrawer("right", true)}
      />
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Cart toggleDrawer={toggleDrawer("right", false)} />
      </Drawer>
    </>
  );
};

export default CartComponent;
