import { Menu, withStyles } from "@material-ui/core";
import React from "react";

const StyledMenu = withStyles({
  paper: {},
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const SearchLocation = ({ anchorEl, handleClose, children }) => {
  return (
    <StyledMenu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {children}
    </StyledMenu>
  );
};

export default SearchLocation;
