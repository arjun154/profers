import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Styles from "./navbar.module.css";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
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

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.black,
      },
    },
  },
}))(MenuItem);

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "75ch",
    },
  },
  list: {
    width: 450,
  },
  fullList: {
    width: "auto",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16%",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    outline: "none",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 15, 5),
    textAlign: "center",
  },
}));

export default function ElevateAppBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "left",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={Styles.cartHeader}>
        <div style={{ float: "left" }}>My Cart</div>
        <div className={Styles.closeBtn}>×</div>
      </div>
      <img
        src="https://grofers.com/images/cart/empty-cart_2x-da3645a.png"
        alt="img"
        className={Styles.cartLogo}
      />
      <div className={Styles.itemsMsg}> No items in your cart</div>
      <div className={Styles.helperMsg}>
        Your favourite items are just a click away
      </div>
      <div>
        <button className={Styles.btnShop}>Start Shopping</button>
      </div>
    </div>
  );
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar className={Styles.appBar}>
          <Toolbar>
            <div className={Styles.logoDiv}>
              <img
                src="https://grofers.com/images/header/logo_2x-72edeee.png"
                alt="logo"
                className={Styles.logoProfers}
              />
            </div>
            <div className={Styles.userAddress}>
              <div>
                <i class="fal fa-map-marker-alt"></i>
              </div>
              <div class={Styles.locationMargin}>New Delhi</div>
              <div>
                <i class="fal fa-chevron-down"></i>
              </div>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div
              class={Styles.login}
              aria-controls="customized-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <div>My Account</div>
              <div
                style={{
                  fontSize: "12px",
                  marginLeft: "20px",
                  letterSpacing: 0.5,
                }}
              >
                Login/Sign Up &nbsp; <i class="fal fa-chevron-down"></i>
              </div>
            </div>

            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <button className={Styles.signUp} onClick={handleModalOpen}>
                  Login or Sign Up
                </button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleModalClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div className={classes.paper}>
                      <div
                        style={{
                          fontSize: "20px",
                          fontWeight: "lighter",
                          marginBottom: "80px",
                        }}
                      >
                        Phone Number Verification
                      </div>
                      <h4 style={{ fontWeight: "500", lineHeight: 1.5 }}>
                        Enter your phone number to <br />
                        Login/Sign up
                      </h4>
                      <div class={Styles.inputWithIcon}>
                        <input
                          type="text"
                          maxLength="10"
                          // value={phoneNumber}
                          className={Styles.phone}
                        />

                        <i class="far fa-mobile">
                          <span style={{ color: "black" }}>+91-</span>
                        </i>
                      </div>
                      <button className={Styles.next}>Next</button>
                    </div>
                  </Fade>
                </Modal>
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <i class="far fa-question-circle"></i>
                </ListItemIcon>
                <ListItemText primary="FAQs" style={{ color: "gray" }} />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <i class="fas fa-percent"></i>
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
            </StyledMenu>

            <div className={Styles.userAddress}>
              <i class="far fa-shopping-cart"></i>
              <div>
                {["right"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <div
                      onClick={toggleDrawer(anchor, true)}
                      class={Styles.locationMargin}
                    >
                      Cart
                    </div>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
