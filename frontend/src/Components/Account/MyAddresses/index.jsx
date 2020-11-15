import React, { useState } from "react";
import Styles from "../styles.module.css";
import AddressModal from "./AddressModal";
import { useEffect } from "react";
import api from "../../../utils/api";
import { useSelector } from "react-redux";
import AddListItem from "./AddressListItem";
import { Box, makeStyles, Typography } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles((theme) => ({
  addButton: {
    width: "100%",
    color: "#e96125",
    background: "transparent",
    padding: "1rem",
    border: 0,
    borderBottom: "1px solid #ddd",
    textAlign: "left",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",

    "&:focus": {
      outline: "none",
    },

    "&>p": {
      marginLeft: "0.8rem",
    },
    "&>*": {
      fontSize: "15px",
    },
  },
}));

const Addresses = () => {
  const classes = useStyles();
  const [openLoginModal, setOpenLoginModal] = React.useState(false);

  const [addresses, setAddresses] = useState([]);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    token &&
      api
        .get("/accounts/addresses", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setAddresses(res.data))
        .catch((error) => console.log(error));
  }, [token, openLoginModal]);

  return (
    <>
      <div className={Styles.dataDisplay}>
        {addresses.length ? (
          <Box border="1px solid #ddd" borderRadius="4px" margin="0.5rem 1rem">
            <button
              onClick={() => setOpenLoginModal(true)}
              className={classes.addButton}
            >
              <AddCircleOutlineIcon /> <Typography>Add address</Typography>
            </button>
            {addresses.map((address) => (
              <AddListItem
                key={address._id}
                setAddresses={setAddresses}
                address={address}
              />
            ))}
          </Box>
        ) : (
          <>
            <img
              src="https://grofers.com/images/profile/address/no-saved-address-c876234.png"
              alt="emptyLogo"
              height="200px"
            />
            <div className={Styles.heading}>You have no saved addresses</div>
            <div className={Styles.subHeading}>
              Tell us where you want your orders delivered
            </div>
            <button
              className={Styles.shoppingBtn}
              onClick={() => setOpenLoginModal(true)}
            >
              Add New Address
            </button>
          </>
        )}
      </div>{" "}
      <AddressModal
        open={openLoginModal}
        handleClose={() => setOpenLoginModal(false)}
        style={{ marginTop: "50%" }}
      />
    </>
  );
};
export default Addresses;
