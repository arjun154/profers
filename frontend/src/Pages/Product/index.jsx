import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import WhyProfers from "../../Components/ProductPage/WhyProfers";
import ProductImage from "../../Components/ProductPage/ProductImage";
import PriceBox from "../../Components/ProductPage/PriceBox";
import { makeStyles } from "@material-ui/core/styles";
import ProductDetails from "../../Components/ProductPage/ProductDetails";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../../utils/api";

const useStyles = makeStyles({
  maxContainer: {
    paddingLeft: 100,
  },
});

export default function Index() {
  const { location } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(`/products/${id}/${location._id}`)
      .then((res) => {
        setData(res.data.docs);
      })
      .catch((err) => console.log(err));
  }, [location._id]);

  const classes = useStyles();

  if (data.length > 0) {
    var item = {
      name: data[0].name,
      price: data[0].varieties[0].price,
      size: data[0].varieties[0].size,
    };

    var details = {
      unit: data[0].varieties[0].size,
      seller: data[0].varieties[0].seller,
      description: data[0].description,
    };
  }

  return (
    <>
      {data.length > 0 && (
        <Container className={classes.maxContainer}>
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12}>
              <ProductImage images={data[0].images} />
            </Grid>
            <Grid item lg={6}>
              <PriceBox wholeItem={data[0]} item={item} />
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item lg={6} md={6} sm={12}>
              <ProductDetails details={details} />
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <WhyProfers />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
