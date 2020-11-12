import React from "react";
import { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
// import { Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
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
export default function Veggies(props) {
  const classes = useStyles();
  const [subCateg, setSubCateg] = React.useState([]);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  useEffect(() => {
    const category = props.match.params.category;
    console.log(category);
    axios({
      method: "get",
      url: `http://13.233.134.77:8000/api/V1/categories/${category}`,
    })
      .then((res) => {
        console.log(res.data.docs[0].name);
        setSubCateg(res.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(subCateg, expanded);

  return (
    <div>
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
    </div>
  );
}
