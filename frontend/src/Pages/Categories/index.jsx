import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../Components/ProductCards/productCard.module.css";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";

const Accordion = withStyles({
  root: {
    width: "200px",
    fontFamily: "Celias,Helvetica",
    fontSize: "14px",
    boxShadow: "none",
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    // borderBottom: "1px solid rgba(0, 0, 0, .125)",
  },

  expanded: {},
})(MuiAccordionSummary);

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
  tabPanel: {
    padding: "5%",
    color: "#666",
    border: "1px solid lightgrey",
  },
}));
export default function CategoryPage() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const [subCateg, setSubCateg] = React.useState([]);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `http://13.233.134.77:8000/api/V1/categories`,
    })
      .then((res) => {
        console.log(res.data.docs[0].name);
        setData(res.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
    if (data.length > 0) {
      axios({
        method: "get",
        url: `http://13.233.134.77:8000/api/V1/categories/${data[1].name}`,
      })
        .then((res) => {
          console.log(res.data.docs[0].name);
          setSubCateg(res.data.docs);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
          {data.length > 0 && data[1].name === "Grocery & Staples" ? (
            <div className={classes.leftFlex}>
              <div className={classes.link}>
                <b>Groceries and Staples</b>
              </div>
              <br />
              <div>
                <Accordion onChange={handleChange("panel1")}>
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>Pulses</Typography>
                  </AccordionSummary>
                  <div>Arhar</div>
                  <br />
                  <div>Moong</div>
                  <br />
                  <div>Urad</div>
                  <br />
                  <div>Rajma & Chana</div>
                  <br />
                  <div>Masoor</div>
                  <br />
                  <div>Soya</div>
                  <br />
                  <div>Dried Peas & Others</div>
                  <br />
                  <div>Organic Pulses</div>
                </Accordion>
              </div>
              <div>
                <Accordion onChange={handleChange("panel1")}>
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>Dry Fruits & Nuts</Typography>
                  </AccordionSummary>
                  <div>Almonds & Cashews</div>
                  <br />
                  <div>Nuts & Seeds</div>
                  <br />
                  <div>Other Dry Fruits</div>
                  <br />
                  <div>Mouth Fresheners & Digestives</div>
                  <br />
                  <div>Dates</div>
                  <br />
                  <div>Dry Fruits Gift Packs</div>
                </Accordion>
              </div>
            </div>
          ) : (
            <></>
          )}
          {/* {data.length > 0 && data[0].name === "Vegetables & Fruits" ? (
            <div className={classes.leftFlex}>
              <div className={classes.link}>
                <b>Vegetables & Fruits</b>
              </div>
              <br />
              <div>
                <Accordion onChange={handleChange("panel1")}>
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>Pulses</Typography>
                  </AccordionSummary>
                  <div>Arhar</div>
                  <br />
                  <div>Moong</div>
                  <br />
                  <div>Urad</div>
                  <br />
                  <div>Rajma & Chana</div>
                  <br />
                  <div>Masoor</div>
                  <br />
                  <div>Soya</div>
                  <br />
                  <div>Dried Peas & Others</div>
                  <br />
                  <div>Organic Pulses</div>
                </Accordion>
              </div>
              <div>
                <Accordion onChange={handleChange("panel1")}>
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>Dry Fruits & Nuts</Typography>
                  </AccordionSummary>
                  <div>Almonds & Cashews</div>
                  <br />
                  <div>Nuts & Seeds</div>
                  <br />
                  <div>Other Dry Fruits</div>
                  <br />
                  <div>Mouth Fresheners & Digestives</div>
                  <br />
                  <div>Dates</div>
                  <br />
                  <div>Dry Fruits Gift Packs</div>
                </Accordion>
              </div>
            </div>
          ) : (
            <></>
          )} */}
          <div className={classes.content}>
            <img
              src="https://grofers.com/images/banners/banner-edlp-e3d1bbb.jpg"
              alt="offerImage"
            />
            {/* <Category /> */}
            <div style={{ display: "flex", width: "90px" }}>
              <Card
                className={styles.root}
                // onClick={() => history.push(`/productCate/${item.id}`)}
              >
                <div>
                  <img
                    style={{ width: "150px" }}
                    src="https://cdn.grofers.com/app/images/products/normal/pro_389904.jpg"
                    alt=""
                  ></img>
                </div>

                <div className={styles.text}>
                  <div
                    className={styles.description}
                    style={{ fontSize: "12px" }}
                  >
                    Profers Mother's Choice Unpolished White Urad Gota/Gola
                  </div>
                </div>
                <div className={styles.pricebox} style={{ float: "left" }}>
                  <div className={styles.price}>₹76</div>
                  <div className={styles.discount}>₹90</div>
                </div>
                <button
                  style={{
                    padding: "2% 7%",
                    borderRadius: "68px",
                    float: "right",
                    outline: "none",
                    color: "#e96125",
                    border: "1px solid #e96125",
                  }}
                >
                  Add to Cart
                </button>
              </Card>

              <Card
                className={styles.root}
                // onClick={() => history.push(`/productCate/${item.id}`)}
              >
                <div>
                  <img
                    style={{ width: "150px" }}
                    src="https://cdn.grofers.com/app/images/products/normal/pro_389904.jpg"
                    alt=""
                  ></img>
                </div>

                <div className={styles.text}>
                  <div
                    className={styles.description}
                    style={{ fontSize: "12px" }}
                  >
                    Profers Mother's Choice Unpolished White Urad Gota/Gola
                  </div>
                </div>
                <div className={styles.pricebox} style={{ float: "left" }}>
                  <div className={styles.price}>₹76</div>
                  <div className={styles.discount}>₹90</div>
                </div>
                <button
                  style={{
                    padding: "2% 7%",
                    borderRadius: "68px",
                    float: "right",
                    outline: "none",
                    color: "#e96125",
                    border: "1px solid #e96125",
                  }}
                >
                  Add to Cart
                </button>
              </Card>
              <Card
                className={styles.root}
                // onClick={() => history.push(`/productCate/${item.id}`)}
              >
                <div>
                  <img
                    style={{ width: "150px" }}
                    src="https://cdn.grofers.com/app/images/products/normal/pro_389904.jpg"
                    alt=""
                  ></img>
                </div>

                <div className={styles.text}>
                  <div
                    className={styles.description}
                    style={{ fontSize: "12px" }}
                  >
                    Profers Mother's Choice Unpolished White Urad Gota/Gola
                  </div>
                </div>
                <div className={styles.pricebox} style={{ float: "left" }}>
                  <div className={styles.price}>₹76</div>
                  <div className={styles.discount}>₹90</div>
                </div>
                <button
                  style={{
                    padding: "2% 7%",
                    borderRadius: "68px",
                    float: "right",
                    outline: "none",
                    color: "#e96125",

                    border: "1px solid #e96125",
                  }}
                >
                  Add to Cart
                </button>
              </Card>
              <Card
                className={styles.root}
                // onClick={() => history.push(`/productCate/${item.id}`)}
              >
                <div>
                  <img
                    style={{ width: "150px" }}
                    src="https://cdn.grofers.com/app/images/products/normal/pro_389904.jpg"
                    alt=""
                  ></img>
                </div>

                <div className={styles.text}>
                  <div
                    className={styles.description}
                    style={{ fontSize: "12px" }}
                  >
                    Profers Mother's Choice Unpolished White Urad Gota/Gola
                  </div>
                </div>
                <div className={styles.pricebox} style={{ float: "left" }}>
                  <div className={styles.price}>₹76</div>
                  <div className={styles.discount}>₹90</div>
                </div>
                <button
                  style={{
                    padding: "2% 7%",
                    borderRadius: "68px",
                    float: "right",
                    outline: "none",
                    color: "#e96125",
                    border: "1px solid #e96125",
                  }}
                >
                  Add to Cart
                </button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
