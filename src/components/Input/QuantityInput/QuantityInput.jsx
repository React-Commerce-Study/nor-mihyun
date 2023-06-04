import React from "react";
import {
  Counter,
  StyledMinusIcon,
  StyledPlusIcon,
  Wrapper,
} from "./QuntityInputStyle";

export default function QuantityInput({ stock }) {
  return (
    <Wrapper>
      <Counter>
        <button type="button" aria-label="수량 내리기" disabled>
          <StyledMinusIcon />
        </button>
        <label>
          <span className="a11y-hidden">상품 주문 수량 입력란</span>
          <input type="number" defaultValue={1} min={1} max={stock} />
        </label>
        <button type="button" aria-label="수량 올리기">
          <StyledPlusIcon />
        </button>
      </Counter>
    </Wrapper>
  );
}
