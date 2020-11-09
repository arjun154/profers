import React from "react";
import LocationPicker from "../../Navbar/LocationPicker/SearchBar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  addressModal: {
    backgroundColor: "white",
    borderRadius: "4px",
    padding: "5% 10%",
    lineHeight: 3,
    marginTop: "2%",
  },
  addressHeading: {
    color: "#333",
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "8px",
    textAlign: "center",
  },
  addressSubHeading: {
    color: "#999",
    fontSize: " 12px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "3px",
    color: "#333",
    cursor: "text",
    fontSize: "14px",
    outline: 0,
    padding: "12px 10px",
  },
  select: {
    width: "25%",
    outline: 0,
    marginRight: "5%",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "3px",
    color: "#333",
    cursor: "text",
    fontSize: "14px",
    padding: "12px 10px",
  },
  selectInput: {
    width: "70%",
    outline: 0,
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "3px",
    color: "#333",
    cursor: "text",
    fontSize: "14px",
    padding: "12px 10px",
  },
  label: {
    color: "#666",
    fontSize: "12px",
    fontFamily: "Celias,Helvetica",
    "& label": {
      marginRight: "10%",
    },
  },
  continueBtn: {
    background: "#e96125",
    borderRadius: "3px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "14px",
    outline: "none",
    padding: " 13px 12px",
    width: "30%",
    textAlign: "center",
    marginRight: "5%",
  },
  cancelBtn: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    color: "#888",
    borderRadius: "3px",
    width: "30%",
    padding: " 13px 12px",
  },
}));

export default function NewAddress() {
  const classes = useStyles();
  return (
    <div className={classes.addressModal}>
      <div className={classes.addressHeading}>Add New Delivery Address</div>
      <small className={classes.addressSubHeading}>
        Please enter the accurate address, it will help us to serve you better
      </small>
      <LocationPicker />
      <div className={classes.label}>Name</div>
      <div>
        <select className={classes.select}>
          <option value="Mr.">Mr</option>
          <option value="Mrs.">Mrs</option>
          <option value="Miss">Miss</option>
        </select>
        <input type="text" value="" className={classes.selectInput} />
      </div>
      <div className={classes.label}>Flat / House / Office No.</div>
      <input type="text" value="" className={classes.input} />
      <div className={classes.label}>Street / Society / Office Name</div>
      <input type="text" value="" className={classes.input} />
      <div className={classes.label}>
        <label>
          <input type="radio"></input> Home
        </label>
        <label>
          <input type="radio"></input> Office
        </label>
        <label>
          <input type="radio"></input> Other
        </label>
      </div>
      <div>
        <button className={classes.continueBtn}>Continue</button>
        <button className={classes.cancelBtn}>Cancel</button>
      </div>
    </div>
  );
}
