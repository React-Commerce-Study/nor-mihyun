import React, { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";
import ProductInfo from "../components/Product/ProductInfo/ProductInfo";
import ProductDetailTabs from "../components/Product/ProductDetailTabs/ProductDetailTabs";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products";

export default function PrdocutDetail() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    (async () => {
      await getProduct(productId).then((res) => {
        setProduct(res);
      });
    })();
  }, [productId]);

  if (Object.keys(product).length) {
    return (
      <AppLayout>
        <ProductInfo product={product} />

        {/* TODO: 상품에 따른 상세 정보 보여주기 */}
        <ProductDetailTabs />
      </AppLayout>
    );
  }
}
