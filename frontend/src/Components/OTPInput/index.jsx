import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

function PinComponent(props) {
  const [values, setValues] = useState(new Array(props.length).fill(""));
  const items = [];

  const handleChange = (e, i) => {
    // extract value
    const value = e.target.value.toUpperCase();

    // set value to array
    setValues((prevState) => {
      prevState[i] = value;
      return [...prevState];
    });

    // manage focus
    if (i + 1 < items.length && e.target.value) {
      items[i + 1].focus();
    }
  };

  const { onChange } = props;
  useEffect(() => {
    onChange(values.join(""));
  }, [values, onChange]);

  const handleBackSpace = (e, i) => {
    if (e.keyCode === 8 && !e.target.value) {
      i - 1 >= 0 && items[i - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData
      .getData("text")
      .slice(0, props.length)
      .split("");

    // extract data to components
    data.forEach((s, i) => {
      values[i] = s.toUpperCase();
      items[i].value = s;
    });

    // set focus
    setTimeout(() => {
      const i = data.length === values.length ? data.length - 1 : data.length;
      items[i].focus();
    }, 0);
  };

  return (
    <div className={styles.root} onPaste={handlePaste}>
      {values.map((value, i) => (
        <input
          className={styles.input}
          maxLength="1"
          key={i}
          onKeyDown={(e) => handleBackSpace(e, i)}
          onChange={(e) => handleChange(e, i)}
          ref={(r) => (items[i] = r)}
        />
      ))}
    </div>
  );
}

export default PinComponent;
