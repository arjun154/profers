import React from "react";
import { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import { useParams, useHistory } from "react-router-dom";

export default function Groceries() {
  const { category } = useParams();

  const [subCateg, setSubCateg] = React.useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://13.233.134.77:8000/api/V1/categories/${category}`,
    })
      .then((res) => {
        setSubCateg(res.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div>
      {subCateg.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
    </div>
  );
}
