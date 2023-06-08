import React, { useState } from "react";
import QuantityInput from "../../Input/QuantityInput/QuantityInput";
import {
  ActionButtons,
  Delivery,
  ImgWrapper,
  Info,
  Price,
  ProductMain,
  Wrapper,
} from "./ProductInfoStyle";
import Button from "../../Button/Button/Button";

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(product.price);

  const handleClickCounter = (num) => {
    setQuantity((prev) => prev + num);
    setTotal((prev) => prev + product.price * num);
  };

  const handleBlurInput = (quantity) => {
    const newQuantity = quantity;
    setQuantity(newQuantity);
    setTotal(product.price * newQuantity);
  };

  return (
    <Wrapper>
      <h2 className="a11y-hidden">상품 상세 페이지</h2>
      <ImgWrapper>
        <img src={product.image} alt={`${product.product_name} 상품 이미지`} />
      </ImgWrapper>
      <form>
        <ProductMain>
          <h3 className="a11y-hidden">상품 기본 정보</h3>
          <Info>
            <span>{product.store_name}</span>
            <h4>{product.product_name}</h4>
            <span>
              <strong>{product.price.toLocaleString()}</strong>원
            </span>
          </Info>
          <Delivery>
            <span>택배배송</span>
            <span>
              {product.shipping_fee ? `${product.shipping_fee}원` : "무료배송"}
            </span>
          </Delivery>
        </ProductMain>
        <QuantityInput
          quantity={quantity}
          stock={product.stock}
          onClick={handleClickCounter}
          onBlur={handleBlurInput}
        />
        <Price>
          <h3 className="a11y-hidden">총 상품 가격 정보</h3>
          <span>총 상품 금액</span>
          <div>
            <span>
              총 수량 <strong>{quantity}</strong>개
            </span>
            <span>
              <strong>{total.toLocaleString()}</strong>원
            </span>
          </div>
        </Price>

        <ActionButtons>
          <Button size={"md"}>바로 구매</Button>
          <Button size={"md"} variant={"dark"}>
            장바구니
          </Button>
        </ActionButtons>
      </form>
    </Wrapper>
  );
}
