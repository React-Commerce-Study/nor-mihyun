import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import {
  ProductGrid,
  ProductListWrapper,
  SideNavMenu,
} from "./ProductListStyle";

const sortOptionList = [
  { id: 0, value: "latest", name: "최신순" },
  { id: 1, value: "expensive", name: "높은 가격" },
  { id: 2, value: "cheapest", name: "낮은 가격" },
];

function ControlMenu({ optionList }) {
  return (
    <SideNavMenu>
      <ul>
        {optionList.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </SideNavMenu>
  );
}

export default function ProductList({ products }) {
  return (
    <ProductListWrapper>
      <ControlMenu optionList={sortOptionList} />
      <ProductGrid>
        {products.map((item) => (
          <ProductItem key={item.product_id} {...item} />
        ))}
      </ProductGrid>
    </ProductListWrapper>
  );
}
