import React from "react";
import { ProductCard } from "./ProductItemStyle";

export default function ProductItem({
  product_name,
  image,
  store_name,
  price,
}) {
  return (
    <li>
      <ProductCard>
        <img src={image} alt={product_name} />
        <span>{store_name}</span>
        <span>{product_name}</span>
        <span>
          <strong>{price.toLocaleString()}</strong>원
        </span>
      </ProductCard>
    </li>
  );
}
