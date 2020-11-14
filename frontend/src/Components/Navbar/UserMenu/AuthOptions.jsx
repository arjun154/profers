import React from "react";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import StyledMenuItem from "../../Common/StyledMenuItem";
import { Link } from "react-router-dom";
import Styles from "../../Account/styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/auth/actions";

const UnAuthOptions = ({ openLoginModal }) => {
  const dispatch = useDispatch();
  const { phoneNumber } = useSelector((state) => state.auth);

  return (
    <>
      <StyledMenuItem>
        <ListItemIcon>
          <img
            src="https://grofers.com/images/header/user-profile-667209e.png"
            alt="accountLogo"
            width="50px"
          />
        </ListItemIcon>
        <ListItemText>
          <small>+91 {phoneNumber}</small>
        </ListItemText>
      </StyledMenuItem>

      <StyledMenuItem>
        <ListItemIcon>
          <i className="fal fa-business-time"></i>
        </ListItemIcon>
        <ListItemText>
          <Link
            to="/account/orders"
            className={Styles.link}
            style={{ color: "gray" }}
          >
            <div style={{ marginTop: "10%" }}>My Orders</div>

            <small>View past orders / Report an issue</small>
          </Link>
        </ListItemText>
      </StyledMenuItem>

      <StyledMenuItem>
        <ListItemIcon>
          <i className="fal fa-map-marked-alt"></i>
        </ListItemIcon>
        <ListItemText>
          <Link
            to="/account/addresses"
            className={Styles.link}
            style={{ color: "gray" }}
          >
            My Addresses
          </Link>
        </ListItemText>
      </StyledMenuItem>

      <StyledMenuItem>
        <ListItemIcon>
          <i
            className="fal fa-rupee-sign"
            style={{
              border: "1px solid grey",
              padding: "2px 5px",
              borderRadius: "50%",
            }}
          ></i>{" "}
        </ListItemIcon>
        <ListItemText style={{ color: "gray" }}>My Wallet</ListItemText>
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

      <StyledMenuItem onClick={() => dispatch(logout())}>
        <ListItemIcon>
          <i className="fal fa-user"></i>
        </ListItemIcon>
        <ListItemText style={{ color: "gray" }}>Logout</ListItemText>
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
