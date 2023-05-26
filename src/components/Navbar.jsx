import React from "react";
import styled from "styled-components";
import cartIcon from "../assets/images/icon-shopping-cart.png";
import userIcon from "../assets/images/icon-user.png";
import { Link } from "react-router-dom";

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

const NavbarWrapper = styled.nav`
  margin-left: auto;

  ${(props) => props.theme.variables.flex}
  gap: 32px;
`;

const IconWrapper = styled.div`
  ${(props) => props.theme.variables.flex("column")}
  gap: 4px;

  span {
    color: ${(props) => props.theme.style.darkGray};
    font-size: ${(props) => props.theme.style.fonts.xs};
  }
`;
