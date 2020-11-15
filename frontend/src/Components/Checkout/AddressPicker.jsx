import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../utils/api";
import Button from "../Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddressModal from "../Account/MyAddresses/AddressModal";

const useStyles = makeStyles((theme) => ({
  addressContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "0.5rem 0",
    overflowX: "auto",
    width: "400px",
  },
  addressBox: {
    minWidth: "200px",
    border: "1px solid #ccc",
    padding: "1rem",
    borderRadius: "4px",
    margin: "0 0.5rem",
  },
  changeAddressBtn: {
    border: "1px solid rgb(233, 97, 37)",
    borderRadius: "4px",
    color: "rgb(233, 97, 37)",
    padding: "0.5rem",
    cursor: "pointer",

    "&:focus": {
      outline: "none",
    },
  },
}));

const AddressBox = ({ item, onClick, selected }) => {
  const classes = useStyles();

  const { name, addressType, street, address } = item;

  return (
    <div
      className={classes.addressBox}
      onClick={onClick}
      style={selected?._id === item._id ? { borderColor: "blue" } : {}}
    >
      <Typography style={{ marginBottom: "0.5rem" }} variant="h6">
        {{ O: "Office", H: "Home", T: "Other" }[addressType]}
      </Typography>
      <Typography> Mr. {name} </Typography>
      <Typography style={{ marginBottom: "0.5rem", color: "#666" }}>
        {street} {address}
      </Typography>

      <Button onlyButton>Deliver Here</Button>
    </div>
  );
};

const AddressAddBtn = ({ onClick }) => (
  <Box
    onClick={onClick}
    display="flex"
    margin="0.5rem 0"
    color="#e96125"
    style={{ cursor: "pointer" }}
  >
    <AddCircleOutlineIcon />
    <Typography style={{ marginLeft: "0.5rem" }}>Add new address</Typography>
  </Box>
);

export default function AddressPicker({ address, selectAddress }) {
  const [addresses, setAddresses] = useState([]);
  const classes = useStyles();

  const { token } = useSelector((state) => state.auth);
  const [addAddressModal, setAddAddressModal] = useState(false);

  useEffect(() => {
    api
      .get("/accounts/addresses", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => setAddresses(data))
      .catch((error) => console.log(error.message));
  }, [addAddressModal]);

  return (
    <>
      <div>
        {address ? (
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/190/190411.svg"
            alt="success.png"
            height="22px"
          />
        ) : (
          <Typography style={{ marginRight: "2.5rem" }}>2</Typography>
        )}

        <div
          style={
            address
              ? {
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  width: "100%",
                }
              : {}
          }
        >
          <Typography style={{ color: "#999" }}>Delivery Address</Typography>
          {!address ? (
            <>
              <AddressAddBtn onClick={() => setAddAddressModal(true)} />
              <Box className={classes.addressContainer}>
                {addresses.map((item) => {
                  return (
                    <AddressBox
                      item={item}
                      key={item._id}
                      selected={address}
                      onClick={() => selectAddress(item)}
                    />
                  );
                })}
              </Box>
            </>
          ) : (
            <>
              <button
                className={classes.changeAddressBtn}
                onClick={() => selectAddress(null)}
              >
                Change Address
              </button>
              <Typography
                component="span"
                style={{ width: "100%", marginTop: "0.5rem", fontWeight: 600 }}
              >
                {`${
                  { O: "Office", H: "Home", T: "Other" }[address.addressType]
                }: `}

                <Typography component="span">
                  {`${address.street} ${address.address}`}
                </Typography>
              </Typography>
            </>
          )}
        </div>
      </div>
      <AddressModal
        open={addAddressModal}
        handleClose={() => setAddAddressModal(false)}
      />
    </>
  );
}
