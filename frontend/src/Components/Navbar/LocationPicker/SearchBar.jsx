import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #ccc",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",

    "& img": {
      width: "15px",
      filter: "opacity(60%)",
    },

    "&>div": {
      padding: "0.5rem 0.8rem",
      display: "flex",
      alignItems: "center",
    },
  },
  inputContainer: {
    flex: 4,
    "& > input": {
      border: 0,
      fontSize: "12px",
      marginLeft: "10px",
      height: "100%",
      width: "100%",
      color: "#444",

      "&:focus": {
        outline: "none",
      },
      "&::placeholder": {
        color: "#c9c9c9",
      },
    },
  },

  detectContainer: {
    flex: 1,
    cursor: "pointer",
    borderLeft: "1px solid #ccc",
    paddingLeft: "0.4rem",

    "& img": {
      marginRight: "0.4rem",
    },

    "& h6": {
      fontSize: "14px",
      color: "#444",
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inputContainer}>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
          alt="search icon.png"
        />
        <input type="text" placeholder="Type your city (e.g Chennai, Pune)" />
      </div>
      <div className={classes.detectContainer}>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/860/860813.svg"
          alt="location.png"
        />
        <Typography component="h6">Detect </Typography>
      </div>
    </div>
  );
};

export default SearchBar;
