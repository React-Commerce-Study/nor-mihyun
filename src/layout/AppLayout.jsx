import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTopBtn from "../components/Button/ScrollToTopBtn/ScrollToTopBtn";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: ${(props) => (props.layout ? "1280px" : "100%")};
  margin: ${(props) => (props.layout ? "0 auto" : 0)};
`;

export default function AppLayout({ layout = true, children }) {
  return (
    <>
      <Header />
      <Wrapper layout={layout}>{children}</Wrapper>
      <ScrollToTopBtn />
      <Footer />
    </>
  );
}
