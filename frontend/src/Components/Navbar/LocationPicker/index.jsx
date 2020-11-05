import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import SearchLocation from "./SearchLocation";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Celias, Helvetica",
    fontWeight: "lighter",
    display: "flex",
    fontSize: "15px",
    padding: "22px 40px",
    cursor: "pointer",

    "& > *": {
      margin: "0 0.2rem",
    },

    "&:hover": {
      background: "#2d3133 !important",
    },
  },
}));

const LocationPicker = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <div
        className={classes.root}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <div>
          <i className="fal fa-map-marker-alt"></i>
        </div>
        <div>New Delhi</div>
        <div>
          <i className="fal fa-chevron-down"></i>
        </div>
      </div>

      <SearchLocation
        anchorEl={anchorEl}
        handleClose={() => setAnchorEl(null)}
      />
    </>
  );
};

export default LocationPicker;
