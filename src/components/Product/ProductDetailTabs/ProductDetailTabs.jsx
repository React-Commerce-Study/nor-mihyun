import React, { useState } from "react";
import { Wrapper } from "./ProductDetailStyle";
import TabButton from "../../Button/TabButton/TabButton";

export default function ProductDetailTabs({ product }) {
  const tabMenus = ["버튼", "리뷰", "Q&A", "반품/교환정보"];

  const [tabMenu, setTabMenu] = useState(0);

  const handleClickTabs = (tabId) => {
    setTabMenu(tabId);
  };

  return (
    <Wrapper>
      {tabMenus.map((item, idx) => (
        <li key={idx}>
          <TabButton
            active={idx === tabMenu}
            onClick={() => handleClickTabs(idx)}
          >
            {item}
          </TabButton>
        </li>
      ))}
    </Wrapper>
  );
}
