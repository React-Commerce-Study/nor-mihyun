import styled, { css } from "styled-components";

export const StyledTabButton = styled.button`
  width: 100%;
  border-bottom: 6px;
  border-style: solid;
  font-family: inherit;
  font-size: ${({ theme }) => theme.style.fonts.lg};

  ${(p) =>
    p.active
      ? css`
          color: ${p.theme.style.mainColor};
          border-color: ${p.theme.style.mainColor};
          font-weight: 700;
        `
      : css`
          color: ${p.theme.style.darkGray};
          border-color: ${p.theme.style.lightGray};
          font-weight: 500;
        `};
`;
