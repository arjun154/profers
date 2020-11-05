import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Cart from "../Cart";
import LocationPicker from "./LocationPicker";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "75ch",
    },
  },
}));

export default function ElevateAppBar(props) {
  const classes = useStyles();


  return (
    <>
      <AppBar className={classes.root}>
        <Logo />

        <LocationPicker />

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>

        <UserMenu />
        <Cart />
      </AppBar>
    </>
  );
}
