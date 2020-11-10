import { Collapse, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import styles from "./product.module.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(() => ({
  buttonStyle: {
    color: "#e96125",
    fontSize: "small",
    marginLeft: "40%",
  },
}));

export default function ProductDetails() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [showButton, setShowButton] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setShowButton(false);
  };

  return (
    <div align="left">
      <div className={styles.productDetailsHeader}>Product Details</div>
      <div className={styles.itemDetailsBox}>
        <div>
          <div className={styles.subHeading}>Unit</div>
          <div className={styles.productSubDetails}>2units (400-500g)</div>
        </div>
        <div>
          <div className={styles.subHeading}>Seller</div>
          <div className={styles.productSubDetails}>
            90Minutes Retails Pvt Ltd(https://bit.ly/2QuoDoe)
          </div>
        </div>
        <div>
          {showButton && (
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              className={classes.buttonStyle}
            >
              View More
              <ExpandMoreIcon />
            </IconButton>
          )}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <div>
              <div className={styles.subHeading}>Description</div>
              <div className={styles.productSubDetails}>
                Pomegranate has a juicy cluster of sparkling, opaque, red
                coloured seeds which taste sweet. It can be used for topping
                desserts and to make juices and fruit salads.
              </div>
            </div>

            <div>
              <div className={styles.subHeading}>Disclaimer</div>
              <div className={styles.productSubDetails}>
                Image shown is a representation and may slightly vary from the
                actual product. Every effort is made to maintain accuracy of all
                information displayed.
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}
