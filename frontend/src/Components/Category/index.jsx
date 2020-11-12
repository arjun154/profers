import React, { useState, useEffect } from "react";
import styles from "./category.module.css";
import ProductCards from "../ProductCards/index";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import api from "../../utils/api";
import { useSelector } from "react-redux";

export default function Category(props) {
  const { location } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  console.log(location.name);
  const query = props.query;
  useEffect(() => {
    fetchData();
    async function fetchData() {
      api
        .get(`/products/getByCity/${location.name}/${query}`)
        .then((res) => {
          setData(res.data.docs);
        })
        .catch((err) => console.log(err));
    }
  }, [location.name]);

  return (
    <Container disableGutters={true}>
      <Card className={styles.pos}>
        <CardContent>
          <div className={styles.row}>
            <div className={styles.card_head}>
              <div>{props.label}</div>
            </div>
            <div>
              <Button variant="outlined" className={styles.button_all}>
                See all
              </Button>
            </div>
          </div>
          <div>
            <ProductCards items={data} />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
