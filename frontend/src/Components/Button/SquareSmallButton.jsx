import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgb(233, 97, 37)",
    height: 30,
    width: 30,
    border: 0,
    borderRadius: 4,
    textAlign: "center",
    color: "#fff",
  },
}));

export default function SquareSmallButton({ label, onClick }) {
  const classes = useStyles();
  return (
    <button className={classes.root} onClick={onClick}>
      {label}
    </button>
  );
}
