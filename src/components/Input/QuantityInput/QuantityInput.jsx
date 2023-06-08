import React, { useEffect, useState } from "react";
import {
  Counter,
  StyledMinusIcon,
  StyledPlusIcon,
  Wrapper,
} from "./QuntityInputStyle";

export default function QuantityInput({ stock, quantity, onClick, onBlur }) {
  const [value, setValue] = useState(quantity);

  const handleChangeInput = (e) => {
    const newValue = parseInt(e.target.value);

    if (isNaN(newValue) || newValue < 1) {
      setValue(1);
    } else {
      setValue(newValue);
    }
  };

  const handleBlurInput = (e) => {
    let newValue = parseInt(e.target.value);

    if (stock < newValue) {
      alert(`${stock}개 이하로 구매하실 수 있습니다.`);
      newValue = stock;
    }

    setValue(newValue);
    onBlur(newValue);
  };

  useEffect(() => {
    setValue(quantity);
  }, [quantity]);

  return (
    <Wrapper>
      <Counter>
        <button
          type="button"
          disabled={value === 1}
          aria-label="수량 내리기"
          onClick={() => onClick(-1)}
        >
          <StyledMinusIcon />
        </button>
        <label>
          <span className="a11y-hidden">상품 주문 수량 입력란</span>
          <input
            type="number"
            min={1}
            value={value}
            max={stock}
            onChange={handleChangeInput}
            onBlur={handleBlurInput}
          />
        </label>
        <button
          type="button"
          disabled={stock < 1 || stock === value}
          aria-label="수량 올리기"
          onClick={() => onClick(1)}
        >
          <StyledPlusIcon />
        </button>
      </Counter>
    </Wrapper>
  );
}
