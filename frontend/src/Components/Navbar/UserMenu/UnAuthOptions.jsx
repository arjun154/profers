import React from "react";
import { ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import StyledMenuItem from "../../Common/StyledMenuItem";

const useStyles = makeStyles((theme) => ({
  signUp: {
    backgroundColor: "#e96336",
    border: "none",
    fontSize: "14px",
    padding: " 14px 70px",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
  faq: {
    padding: "14px 20px 14px 46px",
  },
}));

const UnAuthOptions = ({ openLoginModal }) => {
  const classes = useStyles();
  return (
    <>
      <StyledMenuItem>
        <button className={classes.signUp} onClick={openLoginModal}>
          Login or Sign Up
        </button>
      </StyledMenuItem>

      <StyledMenuItem>
        <ListItemIcon>
          <i className="far fa-question-circle"></i>
        </ListItemIcon>
        <ListItemText primary="FAQs" style={{ color: "gray" }} />
      </StyledMenuItem>
      <StyledMenuItem>
        <ListItemIcon>
          <i className="fas fa-percent"></i>
        </ListItemIcon>
        <ListItemText primary="Offers" style={{ color: "gray" }} />
      </StyledMenuItem>
      <StyledMenuItem>
        <img
          src="https://grofers.com/images/header/grofers-recipe-3ed3e37.png"
          alt="recipe"
          height="30px"
        />
      </StyledMenuItem>
    </>
  );
};

export default UnAuthOptions;
