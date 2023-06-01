import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopBtn from "./ScrollToTopBtn";

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
