import styled from "styled-components";
import { ReactComponent as MinusIcon } from "../../../assets/images/icon-minus-line.svg";
import { ReactComponent as PlusIcon } from "../../../assets/images/icon-plus-line.svg";

export const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 32px;
  padding: 30px 0;
  border-width: 2px 0;
  border-style: solid;
  border-color: ${(props) => props.theme.style.lightGray};
`;

export const StyledMinusIcon = styled(MinusIcon)``;
export const StyledPlusIcon = styled(PlusIcon)``;

export const Counter = styled.div`
  display: flex;
  width: 150px;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.style.lightGray};
  border-radius: 5px;

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    ${(props) => props.theme.variables.flex};
    width: 48px;
    height: 100%;
    padding: 0;
    display: flex;
  }

  button:disabled {
    background-color: #e0e0e0;
    cursor: auto;
    ${StyledMinusIcon}, ${StyledPlusIcon} {
      path {
        stroke: #f2f2f2;
      }
    }
  }

  input {
    flex: 1;
    height: 100%;
    padding: 0;
    font-size: ${(props) => props.theme.style.fonts.lg};
    text-align: center;
    border: none;
    border-left: 1px solid ${(props) => props.theme.style.lightGray};
    border-right: 1px solid ${(props) => props.theme.style.lightGray};
  }
`;
