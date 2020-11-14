import React from "react";
import CustomModal from "../../CustomModal";
import NewAddress from "./NewAddress";

export default function AddressModal({ open, handleClose }) {
  return (
    <div>
      <CustomModal open={open} handleClose={handleClose}>
        <NewAddress handleClose={handleClose} />
      </CustomModal>
    </div>
  );
}
