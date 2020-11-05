import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import StyledMenu from "../../Common/StyledMenu";
import UnAuthOptions from "./UnAuthOptions";
import CustomModal from "../../CustomModal";
import Login from "../Login";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Celias, Helvetica",
    fontWeight: "lighter",
    fontSize: "15px",
    padding: "1.2rem",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#2d3133 !important",
    },
  },
}));

const Menu = () => {
  const { auth } = useSelector((state) => state.auth);
  const classes = useStyles();

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <div
        className={classes.root}
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <div
          style={{
            fontSize: "12px",
            marginLeft: "20px",
            letterSpacing: 0.5,
          }}
        >
          {auth ? <>My Account</> : <>Login/Sign Up</>}
          &nbsp; <i className="fal fa-chevron-down"></i>
        </div>
      </div>

      <StyledMenu anchorEl={anchorEl} handleClose={() => setAnchorEl(null)}>
        <UnAuthOptions openLoginModal={() => setOpenLoginModal(true)} />
      </StyledMenu>

      <CustomModal
        open={openLoginModal}
        handleClose={() => setOpenLoginModal(false)}
      >
        <Login handleClose={() => setOpenLoginModal(false)} />
      </CustomModal>
    </>
  );
};

export default Menu;
