import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import SubCategory from "./SubCategory";
import CategoryCard from "./CategoryCard";
import api from "../../utils/api";

const useStyles = makeStyles(() => ({
  root: {
    position: "sticky",
    zIndex: 1,
    backgroundColor: "white",
    top: 0,
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
    width: "80%",
  },

  flex: {
    width: "20%",
  },

  box: {
    display: "flex",
    marginTop: "1%",
  },

  link: {
    textDecoration: "none",
    color: "#666",
    fontSize: "14px",
    letterSpacing: 0.5,
  },
}));

export default function CategoryPage() {
  const [data, setData] = React.useState([]);
  const classes = useStyles();

  useEffect(() => {
    api
      .get("/categories")
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
        <div className={classes.box}>
          <div className={classes.flex}>
            <SubCategory />
          </div>
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
