import React, { useEffect, useState } from "react";
import { getProductList } from "../api/products";
import AppLayout from "../layout/AppLayout";
import Carousel from "../components/Carousel/Carousel";
import carouselImages from "../mock/mockCarouselData";
import ProductList from "../components/Product/ProductList/ProductList";
import { useScrollChecker } from "../hooks/useScrollChecker";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  const { isBottom } = useScrollChecker();

  // 다음 페이지가 존재하면 데이터 패칭
  useEffect(() => {
    if (hasNext) {
      (async () => {
        await getProductList(page).then((res) => {
          setProducts((prevProducts) => [...prevProducts, ...res.results]);
          setHasNext(page + 1 <= Math.ceil(res.count / 15));
        });
      })();
    }
  }, [page, hasNext]);

  // 바닥에 닿아 있고, 다음 페이지가 존재하면 페이지 수 증가
  useEffect(() => {
    if (isBottom && hasNext) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isBottom, hasNext]);

  return (
    <AppLayout>
      <Carousel data={carouselImages} />
      <ProductList products={products} />
    </AppLayout>
  );
}
