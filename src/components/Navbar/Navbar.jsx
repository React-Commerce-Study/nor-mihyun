import React from "react";
import cartIcon from "../../assets/images/icon-shopping-cart.png";
import userIcon from "../../assets/images/icon-user.png";
import { Link } from "react-router-dom";
import { IconWrapper, NavbarWrapper } from "./NavbarStyle";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <Link to="">
        <IconWrapper>
          <img src={cartIcon} alt="장바구니 아이콘" />
          <span>장바구니</span>
        </IconWrapper>
      </Link>
      <Link to="">
        <IconWrapper>
          <img src={userIcon} alt="장바구니 아이콘" />
          <span>로그인</span>
        </IconWrapper>
      </Link>
    </NavbarWrapper>
  );
}
