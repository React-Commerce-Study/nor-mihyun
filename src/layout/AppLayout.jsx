import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTopBtn from "../components/Button/ScrollToTopBtn/ScrollToTopBtn";

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <ScrollToTopBtn />
      <Footer />
    </>
  );
}
