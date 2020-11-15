import { CircularProgress } from "@material-ui/core";
import React from "react";
import Styles from "./loading.module.css";

export default function Loader() {
  return (
    <div className={Styles.box}>
      <CircularProgress color="secondary" size={80} thickness={8.5} />
    </div>
  );
}
