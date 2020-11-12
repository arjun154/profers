import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #e96125",
    borderRadius: "50%",
    padding: "0.2rem",
    background: "#fff",
    margin: "0 0.5rem",
    width: 25,
    height: 25,
    color: "#e96125",
    cursor: "pointer",

    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      background: "#e96125",
      color: "#fff",
    },
  },
}));

export default function SmallRoundButton({ label, style = {}, onClick }) {
  const classes = useStyles();
  console.log(style);
  return (
    <button onClick={onClick} style={{ ...style }} className={classes.root}>
      {label}
    </button>
  );
}
