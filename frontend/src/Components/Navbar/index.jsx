import React from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Styles from "./navbar.module.css";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CustomModal from "../CustomModal";
import Login from "../Login";
import Cart from "../Cart";
import LocationPicker from "../LocationPicker";
import { useSelector } from "react-redux";
import Logo from "../Logo";

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

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    backgroundColor: "#464b4c",
    top: 0,
  },
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
}));

export default function ElevateAppBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { auth } = useSelector((state) => state.auth);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openLoginModal, setOpenLoginModal] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Logo />

          <LocationPicker />

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
            className={Styles.login}
            aria-controls="customized-menu"
            aria-haspopup="true"
            onClick={handleClick}
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

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <button
                className={Styles.signUp}
                onClick={() => setOpenLoginModal(true)}
              >
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
          </StyledMenu>

          {/* Cart */}
          <div className={Styles.userAddress}>
            <i className="far fa-shopping-cart"></i>
            <div>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <div
                    onClick={toggleDrawer(anchor, true)}
                    className={Styles.locationMargin}
                  >
                    Cart
                  </div>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    <Cart toggleDrawer={toggleDrawer(anchor, false)} />
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <CustomModal
        open={openLoginModal}
        handleClose={() => setOpenLoginModal(false)}
      >
        <Login />
      </CustomModal>
    </>
  );
}
