import React from "react";
import styles from "./button.module.css";

export default function Button({ onClick, onlyButton, children }) {
  return (
    <div className={styles.root} onMouseDown={onClick}>
      <div className={styles.add_button}>
        <div>{children ? children : "ADD"}</div>
      </div>
      {onlyButton ? <></> : <div className={styles.plus_button}>+</div>}
    </div>
  );
}
