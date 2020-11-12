import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid orange",
    borderRadius: "50%",
    padding: "0.2rem",
    background: "#fff",
    margin: "0 0.5rem",
    width: 25,
    height: 25,

    "&:focus": {
      outline: "none",
    },
  },
}));

export default function SmallRoundButton({ label, style = {}, onClick }) {
  const classes = useStyles();
  return (
    <button onClick={onClick} style={style} className={classes.root}>
      {label}
    </button>
  );
}
