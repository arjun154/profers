import React from "react";
import styles from "./button.module.css";

export default function Button({ onClick }) {
  return (
    <div className={styles.root} onMouseDown={onClick}>
      <div className={styles.add_button}>
        <div>ADD</div>
      </div>
      <div className={styles.plus_button}>+</div>
    </div>
  );
}
