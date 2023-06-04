import styled, { css } from "styled-components";

export const SIZES = {
  sm: css`
    --button-font-size: 1.6rem;
    --button-padding: 10px 0px;
  `,
  md: css`
    --button-font-size: 1.8rem;
    --button-padding: 19px 0px;
  `,
  lg: css`
    --button-font-size: 2.4rem;
    --button-padding: 19px 0px;
  `,
};

export const VARIANTS = {
  dark: css`
    --button-bg-color: ${(p) => p.theme.style.darkGray};
  `,
  white: css`
    --button-bg-color: #fff;
    --button-color: ${(p) => p.theme.style.darkGray};
    --button-border: 1px solid ${(p) => p.theme.style.lightGray};
    --button-hover-color: #000;
    --button-hover-border: 1px solid ${(p) => p.theme.style.darkGray};
  `,
};

export const StyledButton = styled.button`
  ${(p) => p.size}
  ${(p) => p.variant}

  border-radius: 5px;
  font-family: inherit;
  font-weight: bold;
  font-size: var(--button-font-size, 1.6rem);
  padding: var(--button-padding, 19px 0px);
  color: var(--button-color, #fff);
  background-color: var(--button-bg-color, ${(p) => p.theme.style.mainColor});
  border: var(--button-border, none);

  &:hover {
    color: var(--button-hover-color, #fff);
    border: var(--button-hover-border, none);
  }

  &:disabled {
    cursor: default;
    background-color: ${(p) => p.theme.style.lightGray};
  }
`;
