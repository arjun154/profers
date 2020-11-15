import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BusinessIcon from "@material-ui/icons/Business";
import HomeIcon from "@material-ui/icons/Home";
import api from "../../../utils/api";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    color: "#666",
    display: "flex",
    padding: "0.8rem 0.5rem",
    fontSize: 15,
    borderBottom: "1px solid #ddd",

    "&>div:nth-child(2)": {
      marginLeft: "1rem",
    },
  },
}));

export default function AddListItem({ address, setAddresses }) {
  const classes = useStyles();
  const { _id, addressType, flat, name, street } = address;
  const { token } = useSelector((state) => state.auth);

  const handleDelete = () => {
    api
      .delete(`accounts/addresses/${_id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAddresses((prev) => prev.filter((address) => address._id !== _id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={classes.root}>
      <div style={{ marginLeft: "0.5rem" }}>
        {addressType === "O" ? <BusinessIcon /> : <HomeIcon />}
      </div>
      <div style={{ marginRight: "0.5rem" }}>
        <Typography style={{ fontWeight: "bold" }} variant="h6">
          {{ H: "Home", O: "Office", T: "Other" }[addressType]}
        </Typography>
        <Typography component="span" color="textPrimary">
          {name} -{" "}
        </Typography>{" "}
        <Typography component="span">
          {flat} {street} {address.address}
        </Typography>
        <Box display="inline-flex">
          <Button variant="text">Edit</Button>
          <Button variant="text" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </div>
    </div>
  );
}
