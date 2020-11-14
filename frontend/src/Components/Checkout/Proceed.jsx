import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CartItem from "./CartItem";
import Phone from "./Phone";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(1),
  },
  paper: {
    marginTop: "100px",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  marginLeft: {
    marginLeft: "8%",
  },
  marginRight: {
    marginRight: "8%",
  },
}));
export default function Proceed() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={7} className={classes.marginLeft}>
          <Paper className={classes.paper}>
            <Phone />
          </Paper>
        </Grid>
        <Grid item xs={3} className={classes.marginRight}>
          <Paper className={classes.paper}>
            <CartItem />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
