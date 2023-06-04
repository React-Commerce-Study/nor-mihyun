import React from "react";
import QuantityInput from "../../Input/QuantityInput/QuantityInput";
import {
  Delivery,
  ImgWrapper,
  Info,
  Price,
  ProductMain,
  Wrapper,
} from "./ProductInfoStyle";

export default function ProductInfo({ product }) {
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
              <strong>{product.price?.toLocaleString()}</strong>원
            </span>
          </Info>
          <Delivery>
            <span>택배배송</span>
            <span>
              {product.shipping_fee ? `${product.shipping_fee}원` : "무료배송"}
            </span>
          </Delivery>
        </ProductMain>
        <QuantityInput stock={product.stock} />
        <Price>
          <h3 className="a11y-hidden">총 상품 가격 정보</h3>
          <span>총 상품 금액</span>
          <div>
            <span>
              총 수량 <strong>1</strong>개
            </span>
            <span>
              <strong>17,500</strong>원
            </span>
          </div>
        </Price>

        {/* -- form buttons -- */}
        {/* <div>
          <button type="submit">바로 구매</button>
          <button type="submit">장바구니</button>
        </div> */}
      </form>
    </Wrapper>
  );
}
