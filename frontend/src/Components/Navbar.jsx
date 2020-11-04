import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Styles from "../Components/navbar.module.css";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";

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
        <button className={Styles.btn}>Start Shopping</button>
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
                className={Styles.logo}
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
            ></StyledMenu>

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
