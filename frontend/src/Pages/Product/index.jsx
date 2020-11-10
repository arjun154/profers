import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import WhyProfers from "../../Components/ProductPage/WhyProfers";
import ProductImage from "../../Components/ProductPage/ProductImage";
import PriceBox from "../../Components/ProductPage/PriceBox";
import { makeStyles } from "@material-ui/core/styles";
import ProductDetails from "../../Components/ProductPage/ProductDetails";

const useStyles = makeStyles({
  maxContainer: {
    paddingLeft: 100,
  },
});

export default function Index() {
  const classes = useStyles();

  const images = [
    {
      id: 1,
      image:
        "https://cdn.grofers.com/app/images/products/sliding_image/321169a.jpg",
    },
    {
      id: 2,
      image:
        "https://cdn.grofers.com/app/images/products/full_screen/pro_321169.jpg",
    },
  ];

  return (
    <>
      <Container className={classes.maxContainer}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12}>
            <ProductImage images={images} />
          </Grid>
          <Grid item lg={6}>
            <PriceBox />
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item lg={6} md={6} sm={12}>
            <ProductDetails />
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <WhyProfers />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
