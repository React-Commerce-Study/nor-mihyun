import React from "react";
import styled from "styled-components";

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

const ProductCard = styled.article`
  ${(props) => props.theme.variables.flex("column", "center", "flex-start")}
  width: 380px;

  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 380/ 380;
    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.style.lightGray};
  }

  span {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  span:nth-child(2) {
    font-size: ${(props) => props.theme.style.fonts.md};
    color: ${(props) => props.theme.style.mainColor};
    margin-top: 20px;
  }

  span:nth-child(3) {
    font-size: ${(props) => props.theme.style.fonts.lg};
    margin-top: 10px;
  }

  span:nth-child(4) {
    ${(props) => props.theme.variables.flex("row", "flex-start")}
    gap: 2px;
    font-size: ${(props) => props.theme.style.fonts.md};
    margin-top: 12px;

    strong {
      font-size: ${(props) => props.theme.style.fonts.xl};
      font-weight: bold;
    }
  }
`;
