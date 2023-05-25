import React from "react";
import styled from "styled-components";
import logo from "../assets/images/Logo-hodu.png";
import SearchForm from "./SearchForm";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderSearch>
        <Link to="/">
          <h1 className="a11y-hidden">호두몰</h1>
          <img src={logo} alt="호두몰 로고" />
        </Link>
        <SearchForm />
      </HeaderSearch>
      <Navbar />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 20px 320px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);

  ${(props) => props.theme.variables.flex("row", "space-between")}
`;

const HeaderSearch = styled.div`
  ${(props) => props.theme.variables.flex}
  gap: 30px;
`;
