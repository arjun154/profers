import { Card, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AddressCard from "./AddressCard";
import Payment from "./Payment";
import AddressModal from "../Account/MyAddresses/AddressModal";
import PhoneVerification from "./PhoneVerification";
import AddressPicker from "./AddressPicker";

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
  const [openLoginModal, setOpenLoginModal] = React.useState(false);
  return (
    <Card className={classes.root}>
      <PhoneVerification />
      <Divider />
      <AddressPicker />
    </Card>
  );
}
