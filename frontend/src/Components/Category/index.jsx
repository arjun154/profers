import React, { useState } from "react";
import styles from "./category.module.css";
import ProductCard from "../ProductCard/index";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export default function Category(props) {
  const [data, setData] = useState([
    {
      id: "1",
      img:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_321169.jpg",
      discountedPrice: "120",
      actualPrice: "200",
      productName: "G Fresh Pomegranate (Anaar)",
      productDetail: "2units (400-500 g)",
    },
    {
      id: "2",
      img:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_321169.jpg",
      discountedPrice: "120",
      actualPrice: "200",
      productName: "G Fresh Pomegranate (Anaar)",
      productDetail: "2units (400-500 g)",
    },
    {
      id: "3",
      img:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_321169.jpg",
      discountedPrice: "120",
      actualPrice: "200",
      productName: "G Fresh Pomegranate (Anaar)",
      productDetail: "2units (400-500 g)",
    },
    {
      id: "4",
      img:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_321169.jpg",
      discountedPrice: "120",
      actualPrice: "200",
      productName: "G Fresh Pomegranate (Anaar)",
      productDetail: "2units (400-500 g)",
    },
    {
      id: "5",
      img:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_321169.jpg",
      discountedPrice: "120",
      actualPrice: "200",
      productName: "G Fresh Pomegranate (Anaar)",
      productDetail: "2units (400-500 g)",
    },
    {
      id: "6",
      img:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_321169.jpg",
      discountedPrice: "120",
      actualPrice: "200",
      productName: "G Fresh Pomegranate (Anaar)",
      productDetail: "2units (400-500 g)",
    },
    {
      id: "7",
      img:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_321169.jpg",
      discountedPrice: "120",
      actualPrice: "200",
      productName: "G Fresh Pomegranate (Anaar)",
      productDetail: "2units (400-500 g)",
    },
  ]);

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
            <ProductCard items={data} />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
