import React from "react";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Styles from "./Categories.module.css";
import api from "../../utils/api";

export default function Groceries() {
  const { category } = useParams();
  const history = useHistory();
  const [subCateg, setSubCateg] = React.useState([]);

  useEffect(() => {
    api
      .get(`/categories/${category}`)
      .then((res) => {
        setSubCateg(res.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div className={Styles.top}>
      <div className={Styles.head}>{category}</div>
      {subCateg.map((item) => (
        <div
          key={item._id}
          className={Styles.Links}
          onClick={() => {
            history.push(`/${category}/${item.name}`);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
