import React from "react";
import styled from "styled-components";
import instaIcon from "../assets/images/icon-insta.png";
import fbIcon from "../assets/images/icon-fb.png";
import ytIcon from "../assets/images/icon-yt.png";

export default function Footer() {
  const pages = [
    "호두샵 소개",
    "이용약관",
    "개인정보처리방침",
    "전자금융거래약관",
    "청소년보호정책",
    "제휴문의",
  ];

  return (
    <FooterWrapper>
      <FooterPageNav>
        <FooterPageList>
          {pages.map((page, idx) => (
            <li key={idx}>
              <span>{page}</span>
            </li>
          ))}
        </FooterPageList>
        <FooterSocialPageList>
          <li>
            <img src={instaIcon} alt="인스타그램 바로가기" />
          </li>
          <li>
            <img src={fbIcon} alt="페이스북 바로가기" />
          </li>
          <li>
            <img src={ytIcon} alt="유튜브 바로가기" />
          </li>
        </FooterSocialPageList>
      </FooterPageNav>
      <FooterInfo>
        <strong>(주)HODU SHOP</strong> <br />
        제주특별자치도 제주시 동광고 137 제주코딩베이스캠프 <br />
        사업자 번호 : 000-0000-0000 | 통신판매업 <br />
        대표 : 김호두
      </FooterInfo>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  ${(props) => props.theme.variables.flex("column", "center", "stretch")}
  gap: 30px;
  height: 298px;
  padding: 54px 320px 63px 320px;
  background-color: ${(props) => props.theme.style.moreLightGray};
`;

const FooterPageNav = styled.div`
  ${(props) => props.theme.variables.flex("row", "space-between")}
`;

const FooterPageList = styled.ul`
  display: flex;

  li span {
    font-size: ${(props) => props.theme.style.fonts.sm};
    cursor: pointer;
  }

  li:nth-child(3) span {
    font-weight: bold;
  }

  li:not(:last-child)::after {
    content: "|";
    display: inline-block;
    width: 1px;
    height: 0px;
    font-size: ${(props) => props.theme.style.fonts.sm};
    margin: 0 14px;
  }
`;

const FooterSocialPageList = styled.ul`
  display: flex;
  gap: 14px;

  li {
    cursor: pointer;
  }
`;

const FooterInfo = styled.p`
  font-size: ${(props) => props.theme.style.fonts.sm};
  line-height: ${(props) => props.theme.style.fonts.xl};

  strong {
    font-weight: bold;
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.style.lightGray};
    margin-bottom: 20px;
  }
`;
