import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Cart from "../Cart";
import LocationPicker from "./LocationPicker";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    backgroundColor: "#464b4c",
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    padding: "0 1rem !important",
    justifyContent: "space-between",
  },
}));

export default function ElevateAppBar(props) {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root}>
        <Logo />
        <LocationPicker />
        <SearchBar />
        <UserMenu />
        <Cart />
      </AppBar>
    </>
  );
}
