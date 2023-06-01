import React from "react";
import instaIcon from "../../assets/images/icon-insta.png";
import fbIcon from "../../assets/images/icon-fb.png";
import ytIcon from "../../assets/images/icon-yt.png";
import {
  FooterInfo,
  FooterPageList,
  FooterPageNav,
  FooterSocialPageList,
  FooterWrapper,
  PageFooter,
} from "./FooterStyle";

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
    <PageFooter>
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
    </PageFooter>
  );
}
