import React from "react";
import { ProductCard } from "./ProductItemStyle";
import { useNavigate } from "react-router-dom";

export default function ProductItem({
  product_id,
  product_name,
  image,
  store_name,
  price,
}) {
  const navigate = useNavigate();

  const handleClickProduct = () => {
    navigate(`/products/${product_id}`);
  };

  return (
    <li>
      <ProductCard onClick={handleClickProduct}>
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
