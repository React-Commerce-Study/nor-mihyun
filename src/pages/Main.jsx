import React, { useEffect, useState } from "react";
import { getProductList } from "../api/products";

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      await getProductList().then((res) => setProducts(res.results));
    })();
  }, []);

  return (
    <>
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
    </>
  );
}
