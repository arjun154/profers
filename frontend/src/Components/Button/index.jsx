import React from "react";
import styles from "./button.module.css";

export default function Button() {
  return (
    <div className={styles.root}>
      <div className={styles.add_button}>
        <div>ADD</div>
      </div>
      <div className={styles.plus_button}>+</div>
    </div>
  );
}
