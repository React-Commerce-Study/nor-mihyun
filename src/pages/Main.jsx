import React, { useEffect, useState } from "react";
import { getProductList } from "../api/products";
import AppLayout from "../components/AppLayout";
import Carousel from "../components/Carousel";
import carouselImages from "../mock/mockCarouselData";

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      await getProductList().then((res) => setProducts(res.results));
    })();
  }, []);

  return (
    <AppLayout>
      <Carousel data={carouselImages} />
      <ul>
        {products.map((item) => (
          <li key={item.product_id}>
            <img
              style={{ width: "380px", height: "380px" }}
              src={item.image}
              alt={item.product_name}
            />
            <span>{item.store_name}</span>
            <span>{item.product_name}</span>
            <span>{item.price.toLocaleString()}원</span>
          </li>
        ))}
      </ul>
    </AppLayout>
  );
}
