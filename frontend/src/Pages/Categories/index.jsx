import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import Groceries from "./Groceries";
import CategoryCard from "./CategoryCard";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    backgroundColor: "white",
    top: 60,
    color: "#333",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Celias,Helvetica",
    padding: "0.8rem 5rem !important",
    justifyContent: "space-between",
    "& b": {
      fontSize: "14px",
    },
  },
  content: {
    marginTop: "5%",
    flex: 5,
  },
  flex: {
    display: "flex",
    background: "white",
  },
  leftFlex: {
    marginTop: "5%",
    marginLeft: "5%",
    flex: 1,
    // position: "fixed",
    overflowY: "scroll",
    overflowX: "hidden",
    background: "white",
    "& div": {
      textAlign: "left",
      padding: "1% 3%",
    },
  },
  link: {
    textDecoration: "none",
    color: "#666",
    fontSize: "14px",
    letterSpacing: 0.5,
  },
}));

export default function CategoryPage(props) {
  const classes = useStyles();
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://13.233.134.77:8000/api/V1/categories`,
    })
      .then((res) => {
        setData(res.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (data.length > 0) {
    return (
      <div>
        <AppBar className={classes.root}>
          <div>
            <b>
              <i className="fas fa-store-alt"></i> Super Store - kundalahalli
            </b>
          </div>
          <div>
            <Link to={`/${data[1].name}`} className={classes.link}>
              <div>{data[1].name}</div>
            </Link>
          </div>
          <div>
            <Link to={`/${data[0].name}`} className={classes.link}>
              <div>{data[0].name}</div>
            </Link>
          </div>
          <div>
            <Link to={`/${data[2].name}`} className={classes.link}>
              <div>{data[2].name}</div>
            </Link>
          </div>
          <div>
            <Link to={`/${data[3].name}`} className={classes.link}>
              <div>{data[3].name}</div>
            </Link>
          </div>
          <div>
            <Link to={`/${data[4].name}`} className={classes.link}>
              <div>{data[4].name}</div>
            </Link>
          </div>
          <div>
            <Link to={`/${data[5].name}`} className={classes.link}>
              <div>{data[5].name}</div>
            </Link>
          </div>
        </AppBar>
        <div className={classes.flex}>
          <Groceries />
          <div className={classes.content}>
            <img
              src="https://grofers.com/images/banners/banner-edlp-e3d1bbb.jpg"
              alt="offerImage"
            />
            <CategoryCard />
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
