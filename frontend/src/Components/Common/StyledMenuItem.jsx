import React from "react";
import { MenuItem, withStyles } from "@material-ui/core";

const CustomStyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.black,
      },
    },
  },
}))(MenuItem);

const StyledMenuItem = ({ children }) => {
  return <CustomStyledMenuItem>{children}</CustomStyledMenuItem>;
};

export default StyledMenuItem;
