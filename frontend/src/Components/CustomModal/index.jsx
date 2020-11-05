import { Backdrop, Fade, Modal } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.css";

const CustomModel = ({ children, open, handleClose }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={styles.root}
      open={open}
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
