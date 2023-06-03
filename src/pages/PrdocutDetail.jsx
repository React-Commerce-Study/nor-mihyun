import React, { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";
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

  return (
    <AppLayout>
    </AppLayout>
  );
}
