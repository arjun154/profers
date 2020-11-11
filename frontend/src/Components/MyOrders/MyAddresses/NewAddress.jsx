import React from "react";
import LocationPicker from "./Searchbar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  addressModal: {
    backgroundColor: "white",
    borderRadius: "4px",
    width: "40%",
    padding: "2% 0%",
    marginTop: "10%",
    "& h4": {
      letterSpacing: "0.2px",
      fontFamily: "Celias,Helvetica",
    },
  },
  addressHeading: {
    color: "#333",
    padding: "1% 8%",
    fontFamily: "Celias,Helvetica",
    fontSize: "18px",
    marginBottom: "8px",
    textAlign: "center",
  },
  addressSubHeading: {
    color: "#999",
    fontSize: " 12px",
    textAlign: "center",
    fontFamily: "Celias,Helvetica",
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
    width: "27%",
    outline: 0,
    marginRight: "3%",
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
  const [name, setName] = React.useState("");
  const [flatNo, setFlatNo] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [title, setTitle] = React.useState("");

  return (
    <div className={classes.addressModal}>
      <div className={classes.addressHeading}>
        <h4>Add New Delivery Address</h4>
        <small className={classes.addressSubHeading}>
          Please enter the accurate address, it will help us to serve you better
        </small>
      </div>
      <div
        style={{
          lineHeight: 2.1,
          padding: "1% 8%",
        }}
      >
        <div className={classes.label}>Area / Locality</div>
        <LocationPicker />
      </div>
      <br />
      <div
        style={{
          lineHeight: 2.5,
          borderTop: "1px solid #ccc",
          background: "#f9f9f9",
          padding: "1% 8%",
        }}
      >
        <div className={classes.label}>Name</div>
        <div>
          <select
            className={classes.select}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          >
            <option value="">Title</option>
            <option value="Mr.">Mr</option>
            <option value="Mrs.">Mrs</option>
            <option value="Miss">Miss</option>
          </select>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={classes.selectInput}
            required
          />
        </div>
        <div className={classes.label}>Flat / House / Office No.</div>
        <input
          type="text"
          value={flatNo}
          onChange={(e) => setFlatNo(e.target.value)}
          className={classes.input}
          required
        />
        <div className={classes.label}>Street / Society / Office Name</div>
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className={classes.input}
          required
        />
        <div className={classes.label}>
          <label>
            <input type="radio" required></input> Home
          </label>
          <label>
            <input type="radio" required></input> Office
          </label>
          <label>
            <input type="radio" required></input> Other
          </label>
        </div>
        <div>
          <button className={classes.continueBtn}>Continue</button>
          <button className={classes.cancelBtn}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
