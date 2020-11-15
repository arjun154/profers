import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AddressCard from "./AddressCard";
import Payment from "./Payment";
import AddressModal from "../Account/MyAddresses/AddressModal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px",
    marginRight: "2rem",
    boxShadow: "10px 10px 5px #eee",

    "&>div": {
      display: "flex",
      "&>*:first-child": {
        marginRight: "1rem",
      },
    },
  },

  marginLeft: {
    paddingBottom: "10%",
    fontSize: "14px",
    color: "black",
    marginLeft: "-58%",
  },
  two: {
    border: "1px solid #e96125",
    borderRadius: "50%",
    width: "20px",
  },
  flex: {
    marginTop: "15px",
    display: "flex",
    "& p": {
      marginLeft: "5%",
      color: "green",
      border: "1px solid green",
    },
    "& div": {
      marginLeft: "5%",
      color: "black",
      fontWeight: "bold",
      letterSpacing: "1px",
    },
  },
  address: {
    display: "flex",
    fontSize: "14px",
    marginLeft: "12%",
    color: "#e96125",
    paddingBottom: "5%",
    marginTop: "2%",
    cursor: "pointer",
  },
  modal: {
    width: "200%",
    textAlign: "left",
    marginTop: "-20%",
    marginLeft: "6%",
  },
}));
export default function Phone() {
  const classes = useStyles();
  const [openLoginModal, setOpenLoginModal] = React.useState(false);
  return (
    <div className={classes.root}>
      <div>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/190/190411.svg"
          alt="success.png"
          height="22px"
        />
        <div>
          <Typography>Phone Number Verification</Typography>
          <div>+91 9493154676</div>
        </div>
      </div>

      <Divider />
      <div>
        <p className={classes.two}>2</p>
        <div>Delivery Address</div>
      </div>

      <div className={classes.address}>
        <div className={classes.two} style={{ marginRight: "2%" }}>
          +
        </div>
        <div onClick={() => setOpenLoginModal(true)}>
          Add New Delivery Address
        </div>
      </div>

      <AddressCard />
      <Divider />
      <Payment />
      <AddressModal
        open={openLoginModal}
        handleClose={() => setOpenLoginModal(false)}
        style={{ marginTop: "50%" }}
      />
    </div>
  );
}
