import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../utils/api";
import Button from "../Button";

const useStyles = makeStyles((theme) => ({
  addressContainer: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 0",
    overflowY: "auto",
  },
  addressBox: {
    width: "200px",
    border: "1px solid #ccc",
    padding: "1rem",
    borderRadius: "4px",
  },
}));

const AddressBox = ({ item, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.addressBox} onClick={onClick}>
      <Typography style={{ marginBottom: "0.5rem" }} variant="h6">
        Office
      </Typography>
      <Typography> Mr. Suhail Malik </Typography>
      <Typography style={{ marginBottom: "0.5rem", color: "#666" }}>
        Obeya Brio Sector 4, HSR Layout, Bengluru
      </Typography>

      <Button onlyButton>Deliver Here</Button>
    </div>
  );
};

export default function AddressPicker({ address }) {
  const [addresses, setAddresses] = useState([]);
  console.log(addresses);
  const classes = useStyles();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    api
      .get("/accounts/addresses", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => setAddresses(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
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

      <div>
        <Typography style={{ color: "#999" }}>Delivery Address</Typography>

        <div className={classes.addressContainer}>
          <AddressBox onClick={() => console.log("here")} />
        </div>
      </div>
    </div>
  );
}
