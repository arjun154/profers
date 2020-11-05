import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import StyledMenu from "../../Common/StyledMenu";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "450px",
    textAlign: "center",
    padding: "1rem 2rem",
  },
  title: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#333",
  },
  searchContainer: {
    margin: "0.6rem 0",
  },
}));

const SearchLocation = ({ anchorEl, handleClose }) => {
  const classes = useStyles();
  return (
    <StyledMenu anchorEl={anchorEl} handleClose={handleClose}>
      <div className={classes.root}>
        <Typography variant="caption" className={classes.title}>
          Change Delivery City.
        </Typography>

        <div className={classes.searchContainer}>
          <SearchBar />
        </div>
      </div>
    </StyledMenu>
  );
};

export default SearchLocation;
