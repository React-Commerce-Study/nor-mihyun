import React from "react";
import { useScrollChecker } from "../../../hooks/useScrollChecker";
import { BtnWrapper } from "./ScrollToTopBtnStyle";

function ScrollToTopBtn() {
  const { isTop } = useScrollChecker();

  const handleClickButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BtnWrapper isTop={isTop}>
      <button type="button" onClick={handleClickButton}></button>
    </BtnWrapper>
  );
}

export default React.memo(ScrollToTopBtn);
