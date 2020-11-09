import React from "react";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Suggestions from "./Suggestions";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    color: "#333",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#efefef",
    color: "#999",
    borderRadius: theme.shape.borderRadius,
    cursor: "pointer",
  },
  inputRoot: {
    color: "inherit",
    borer: "1px solid blue",
  },
  inputInput: {
    padding: theme.spacing(1),
    paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "75ch",
    },
    fontSize: "14px",
  },
}));

const SearchBar = () => {
  const classes = useStyles();

  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className={classes.root}>
      <InputBase
        placeholder="Search for Products"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        onChange={(e) => setQuery(e.target.value)}
        inputProps={{ "aria-label": "search" }}
      />
      {showSuggestions && <Suggestions query={query} />}
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
