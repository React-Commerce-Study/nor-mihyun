import styled from "styled-components";
import ArrowTop from "../../../assets/images/icon-arrow-top.svg";

export const BtnWrapper = styled.article`
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 10rem;

  button {
    width: 80px;
    height: 80px;
    background-color: #000;
    border: none;
    border-radius: 100%;
    opacity: ${(props) => (props.isTop ? 0 : 1)};
    transform: ${(props) =>
      props.isTop ? `translateY(200px)` : `translateY(0)`};
    transition: all 0.5s ease;
  }

  button::after {
    ${(props) => props.theme.variables.pseudoBackground(ArrowTop)};
    margin: 0 auto;
    width: 32px;
    height: 32px;
  }
`;
