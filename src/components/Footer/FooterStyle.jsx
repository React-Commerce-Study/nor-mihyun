import styled from "styled-components";

export const PageFooter = styled.footer`
  width: 100%;
  height: 298px;
  background-color: ${(props) => props.theme.style.moreLightGray};
`;

export const FooterWrapper = styled.div`
  ${(props) => props.theme.variables.flex("column", "center", "stretch")}
  gap: 30px;
  max-width: 1280px;
  padding: 54px 0 63px 0;
  margin: 0 auto;
`;

export const FooterPageNav = styled.div`
  ${(props) => props.theme.variables.flex("row", "space-between")}
`;

export const FooterPageList = styled.ul`
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

export const FooterSocialPageList = styled.ul`
  display: flex;
  gap: 14px;

  li {
    cursor: pointer;
  }
`;

export const FooterInfo = styled.p`
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
