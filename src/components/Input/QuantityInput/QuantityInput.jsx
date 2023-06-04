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

  useEffect(() => {
    setValue(quantity);
  }, [quantity]);

  return (
    <Wrapper>
      <Counter>
        <button
          type="button"
          disabled={stock < 1 || value === 1}
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
            onBlur={onBlur}
          />
        </label>
        <button
          type="button"
          disabled={stock === value}
          aria-label="수량 올리기"
          onClick={() => onClick(1)}
        >
          <StyledPlusIcon />
        </button>
      </Counter>
    </Wrapper>
  );
}
