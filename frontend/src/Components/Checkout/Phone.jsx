import { Card, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import PhoneVerification from "./PhoneVerification";
import AddressPicker from "./AddressPicker";
import Payment from "./Payment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "500px",
    marginRight: "2rem",
    textAlign: "left",

    "&>div": {
      display: "flex",
      padding: "1rem 2rem",
      "&>*:first-child": {
        marginRight: "2rem",
      },
    },
  },
}));
export default function Phone() {
  const classes = useStyles();
  const [address, setAddress] = useState(false);

  return (
    <Card className={classes.root}>
      <PhoneVerification />
      <Divider />
      <AddressPicker
        address={address}
        selectAddress={(item) => setAddress(item)}
      />
      <Divider />
      <Payment address={address} />
    </Card>
  );
}
