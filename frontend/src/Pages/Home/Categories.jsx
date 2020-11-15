import React from "react";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import api from "../../utils/api";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "white",
    margin: "0.5% 3%",
    marginTop: "0%",
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    "& img": {
      width: "60px",
    },
    "& div": {
      fontSize: "12px",
      margin: "1.5% 0%",
      fontFamily: "Celias,Helvetica",
      textAlign: "center",
      color: "#333",
    },
  },
  link: {
    textDecoration: "none",
  },
}));
export default function Categories() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  useEffect(() => {
    api
      .get(`/categories`)
      .then((res) => {
        setData(res.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (data.length > 0) {
    return (
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <div>
            <Link to={`/${data[1].name}`} className={classes.link}>
              <img
                src="https://webcdn.grofers.com/cdn/pdp/category-l0-16.jpg"
                alt="grocery"
              />
              <div>{data[1].name}</div>
            </Link>
          </div>
          <div>
            <Link to={`/${data[0].name}`} className={classes.link}>
              <img
                src="https://webcdn.grofers.com/cdn/pdp/category-l0-1487.jpg"
                alt="veggies and fruits"
              />
              <div>{data[0].name}</div>
            </Link>
          </div>
          <div>
            <Link to={`/${data[2].name}`} className={classes.link}>
              <img
                src="https://webcdn.grofers.com/cdn/pdp/category-l0-13.jpg"
                alt="snacks"
              />
              <div>{data[2].name}</div>
            </Link>
          </div>
          <div>
            <Link to={`/${data[3].name}`} className={classes.link}>
              <img
                src="https://webcdn.grofers.com/cdn/pdp/category-l0-12.jpg"
                alt="beverages"
              />
              <div>{data[3].name}</div>
            </Link>
          </div>
          <div>
            <Link to={`/${data[4].name}`} className={classes.link}>
              <img
                src="https://webcdn.grofers.com/cdn/pdp/category-l0-14.jpg"
                alt="dairy"
              />
              <div>{data[4].name}</div>
            </Link>
          </div>
          <div>
            <Link to={`/${data[5].name}`} className={classes.link}>
              <img
                src="https://webcdn.grofers.com/cdn/pdp/category-l0-15.jpg"
                alt="instant food"
              />
              <div>{data[5].name}</div>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
