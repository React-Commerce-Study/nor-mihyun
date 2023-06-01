import React from "react";
import logo from "../../assets/images/Logo-hodu.png";
import SearchForm from "../SearchForm/SearchForm";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { HeaderSearch, HeaderWrapper, PageHeader } from "./HeaderStyle";

export default function Header() {
  return (
    <PageHeader>
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
    </PageHeader>
  );
}
