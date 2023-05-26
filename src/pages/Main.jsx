import React, { useEffect, useState } from "react";
import { getProductList } from "../api/products";
import AppLayout from "../components/AppLayout";
import Carousel from "../components/Carousel";
import carouselImages from "../mock/mockCarouselData";
import ProductList from "../components/ProductList";

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      await getProductList().then((res) => setProducts(res.results));
    })();
  }, []);

  return (
    <AppLayout>
      <Carousel data={carouselImages} />
      <ProductList products={products} />
    </AppLayout>
  );
}
