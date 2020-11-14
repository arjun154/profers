import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import styles from "./Categories.module.css";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../../utils/api";

export default function CategoryCard() {
  const history = useHistory();
  const { category } = useParams();
  const { location } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(`/products/getByCity/${location.name}/${category}`)
      .then((res) => {
        setData(res.data.docs);
      })
      .catch((err) => console.log(err));
  }, [category, location.name]);

  return (
    <>
      {data.length > 0 ? (
        <div>
          <div className={styles.products}>
            {data.map((item) => (
              <Card
                key={item._id}
                className={styles.root}
                variant="outlined"
                onClick={() => history.push(`/productCate/${item._id}`)}
              >
                <div style={{ position: "relative" }}>
                  {item.varieties[0].sale > 0 && (
                    <div className={styles.saleTag}>
                      {item.varieties[0].sale}% OFF
                    </div>
                  )}
                  <div>
                    <img
                      height="200px"
                      width="200px"
                      src={item.images[0].location}
                      alt={item._id}
                    ></img>
                  </div>
                  <div className={styles.text}>
                    <div className={styles.description}>{item.name}</div>
                  </div>
                  <div style={{ float: "left" }}>
                    <div className={styles.price}>
                      ₹
                      {Math.floor(
                        item.varieties[0].price -
                          (item.varieties[0].price * item.varieties[0].sale) /
                            100
                      )}
                    </div>
                    <div className={styles.discount}>
                      ₹{item.varieties[0].price}
                    </div>
                  </div>
                </div>
                <button className={styles.button}>Add to Cart</button>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}
