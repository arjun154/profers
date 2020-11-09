import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "100%",
    listStyleType: "none",
    top: "2rem",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "0 0 4px 4px",
    padding: theme.spacing(0, 1),
  },
  listItem: {
    height: "40px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: theme.spacing(0, 1),

    "& img": {
      height: "30px",
      marginRight: theme.spacing(1),
    },
  },
}));

const Suggestions = ({ list }) => {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      <li className={classes.listItem}>
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_428181.jpg"
          alt="imgLink"
        />
        <Typography color="textSecondary">
          Atta in{" "}
          <Typography component="span" color="primary">
            Atta & others Flours
          </Typography>
        </Typography>
      </li>
      <li className={classes.listItem}>
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_428181.jpg"
          alt="imgLink"
        />
        <Typography color="textSecondary">
          Atta in{" "}
          <Typography component="span" color="primary">
            Atta & others Flours
          </Typography>
        </Typography>
      </li>
    </ul>
  );
};

export default Suggestions;
