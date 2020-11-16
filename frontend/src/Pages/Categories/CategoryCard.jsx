import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import styles from "./Categories.module.css";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../../utils/api";
import Loader from "../../Components/LoadingIndicator";
import { addToCart, removeFromCart } from "../../Redux/cart/actions";
import SmallRoundButton from "../../Components/Button/SmallRoundButton";

export default function CategoryCard() {
  const history = useHistory();
  const { category, subcategory } = useParams();
  const { location } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("_id");
  const [sortOrder, setSortOrder] = useState("");
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    api
      .get(
        subcategory
          ? `/products/getBy/${location.name}/${category}/${subcategory}`
          : `/products/getByCity/${location.name}/${category}`,
        {
          params: {
            sortBy,
            sortOrder,
          },
        }
      )
      .then((res) => {
        setData(res.data.docs);
      })
      .catch((err) => console.log(err));
  }, [category, location.name, subcategory, sortBy, sortOrder]);

  const handleChange = (event) => {
    const [a, b] = event.target.value.split("&");
    setSortBy(a);
    setSortOrder(b);
  };

  return (
    <>
      {data.length > 0 ? (
        <>
          <div className={styles.box}>
            <FormControl variant="outlined">
              <InputLabel>Sort By</InputLabel>
              <Select
                value={`${sortBy}&${sortOrder}`}
                onChange={handleChange}
                label="Sort By"
              >
                <MenuItem value="_id&">Relevance</MenuItem>
                <MenuItem value="name&asc">Name(a to z)</MenuItem>
                <MenuItem value="varieties.price&asc">
                  Price - low to high
                </MenuItem>
                <MenuItem value="varieties.price&desc">
                  Price - high to low
                </MenuItem>
                <MenuItem value="varieties.sale&desc">
                  Discount - high to low
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={styles.products}>
            {data.map((item) => (
              <Card key={item._id} className={styles.root} variant="outlined">
                <div
                  style={{ position: "relative" }}
                  onClick={() => history.push(`/productCate/${item._id}`)}
                >
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
                  <div style={{ float: "left", color: "#666" }}>
                    {item.varieties[0].size}
                  </div>
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <div className={styles.price}>
                      ₹
                      {item.varieties[0].price -
                        (item.varieties[0].price * item.varieties[0].sale) /
                          100}
                    </div>
                    <div className={styles.discount}>
                      ₹{item.varieties[0].price}
                    </div>
                  </div>
                </div>
                {cartItems[item._id] ? (
                  <Box display="flex" justifyContent="flex-end">
                    <SmallRoundButton
                      label="-"
                      onClick={() => dispatch(removeFromCart(item._id))}
                    />
                    <Typography color="textSecondary">
                      {cartItems[item._id].qty}
                    </Typography>
                    <SmallRoundButton
                      label="+"
                      onClick={() => dispatch(addToCart(item._id, item))}
                    />
                  </Box>
                ) : (
                  <button
                    onClick={(e) => {
                      dispatch(addToCart(item._id, item));
                    }}
                    className={styles.button}
                  >
                    Add to Cart
                  </button>
                )}
              </Card>
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
