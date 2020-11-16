import { Backdrop, Fade, Modal } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.css";

const CustomModel = ({ children, open, handleClose, style, className }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={`${styles.root} ${className}`}
      open={open}
      style={style}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>{children}</Fade>
    </Modal>
  );
};

export default CustomModel;
