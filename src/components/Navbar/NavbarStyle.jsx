import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  margin-left: auto;

  ${(props) => props.theme.variables.flex}
  gap: 32px;
`;

export const IconWrapper = styled.div`
  ${(props) => props.theme.variables.flex("column")}
  gap: 4px;

  span {
    color: ${(props) => props.theme.style.darkGray};
    font-size: ${(props) => props.theme.style.fonts.xs};
  }
`;
