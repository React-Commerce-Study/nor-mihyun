import styled from "styled-components";

export const ProductListWrapper = styled.section`
  margin: 80px auto 180px auto;
  width: min(1280px, calc(100% - 320px));
`;

export const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  justify-items: center;
  gap: 80px 70px;
  width: 100%;
`;

export const SideNavMenu = styled.nav`
  ul {
    display: flex;
    margin-bottom: 45px;

    li span {
      font-size: ${(props) => props.theme.style.fonts.lg};
      color: ${(props) => props.theme.style.darkGray};
      cursor: pointer;
    }

    li:not(:last-child)::after {
      content: "|";
      display: inline-block;
      width: 1px;
      height: 0px;
      font-size: ${(props) => props.theme.style.fonts.lg};
      color: ${(props) => props.theme.style.lightGray};
      margin: 0 20px;
    }
  }
`;
