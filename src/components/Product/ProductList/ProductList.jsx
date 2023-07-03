import React, { useState } from "react";
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

function ControlMenu({ optionList, onClick }) {
  return (
    <SideNavMenu>
      <ul>
        {optionList.map((item) => (
          <li key={item.id}>
            <span onClick={() => onClick(item.value)}>{item.name}</span>
          </li>
        ))}
      </ul>
    </SideNavMenu>
  );
}

export default function ProductList({ products }) {
  const [sortType, setSortType] = useState("latest");

  const getSortedProducts = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      } else if (sortType === "expensive") {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    };

    const sortedList = products.sort(compare);

    return sortedList;
  };

  return (
    <ProductListWrapper>
      <ControlMenu optionList={sortOptionList} onClick={setSortType} />
      <ProductGrid>
        {getSortedProducts().map((item) => (
          <ProductItem key={item.product_id} {...item} />
        ))}
      </ProductGrid>
    </ProductListWrapper>
  );
}
