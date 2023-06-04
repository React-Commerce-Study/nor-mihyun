import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 80px;
  margin-bottom: 140px;
  display: flex;
  gap: 50px;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div`
  width: 600px;
  height: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ProductMain = styled.section`
  flex: 1;
  ${(props) =>
    props.theme.variables.flex("column", "space-between", "flex-start")}
`;

export const Info = styled.div`
  span {
    font-size: ${(props) => props.theme.style.fonts.lg};
  }

  span:nth-child(1) {
    color: ${(props) => props.theme.style.darkGray};
  }

  span:nth-child(3) {
    strong {
      font-size: ${(props) => props.theme.style.fonts.xxl};
      font-weight: bold;
    }
  }

  h4 {
    font-size: ${(props) => props.theme.style.fonts.xxl};
    margin-top: 16px;
    margin-bottom: 20px;
  }
`;

export const Delivery = styled.div`
  span {
    font-size: ${(props) => props.theme.style.fonts.md};
    color: ${(props) => props.theme.style.darkGray};
  }

  span:first-child::after {
    content: "/";
    margin: 0 0.3em;
  }
`;

export const Price = styled.section`
  ${(props) => props.theme.variables.flex("row", "space-between")};

  span {
    font-size: ${(props) => props.theme.style.fonts.lg};
  }

  span:nth-child(2) {
    font-weight: bold;
  }

  div {
    span:nth-child(1) {
      color: ${(props) => props.theme.style.darkGray};

      strong {
        font-size: inherit;
        font-weight: bold;
        color: ${(props) => props.theme.style.mainColor};
      }
    }

    span:nth-child(1)::after {
      content: "";
      display: inline-block;
      width: 1px;
      height: 20px;
      margin: 0 0.7em;
      vertical-align: middle;
      background-color: ${(props) => props.theme.style.lightGray};
    }

    span:nth-child(2) {
      color: ${(props) => props.theme.style.mainColor};
      font-weight: normal;

      strong {
        font-size: ${(props) => props.theme.style.fonts.xxl};
        font-weight: bold;
        margin-right: 0.05em;
      }
    }
  }
`;

export const ActionButtons = styled.div`
  ${(props) => props.theme.variables.flex};
  gap: 14px;
  margin-top: 41px;

  button:nth-child(1) {
    flex-basis: 416px;
  }

  button:nth-child(2) {
    flex: 1;
  }
`;
