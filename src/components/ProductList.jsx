import React from "react";
import ProductItem from "./ProductItem";
import styled from "styled-components";

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

const ProductListWrapper = styled.section`
  margin: 80px auto 180px auto;
  width: min(1280px, calc(100% - 320px));
`;

const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  justify-items: center;
  gap: 80px 70px;
  width: 100%;
`;

const SideNavMenu = styled.nav`
  ul {
    display: flex;
    margin-bottom: 45px;

    li span {
      font-size: ${(props) => props.theme.style.fonts.lg};
      color: ${(props) => props.theme.style.darkGray};
      cursor: pointer;
    }

    li:not(:last-child)::after {
      content: "|";
      display: inline-block;
      width: 1px;
      height: 0px;
      font-size: ${(props) => props.theme.style.fonts.lg};
      color: ${(props) => props.theme.style.lightGray};
      margin: 0 20px;
    }
  }
`;
