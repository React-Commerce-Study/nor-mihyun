import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/images/icon-search.svg";

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchButton = styled.button`
  padding: 0;
  transform: translateX(-44px);
`;

export const StyledSearchIcon = styled(SearchIcon)``;

export const SearchInput = styled.input`
  width: 400px;
  height: 46px;
  border: 2px solid ${(props) => props.theme.style.darkGray};
  border-radius: 50px;
  padding: 13px 22px;
  font-family: inherit;
  font-size: ${(props) => props.theme.style.fonts.md};

  &::placeholder {
    color: ${(props) => props.theme.style.darkGray};
  }

  &:active,
  &:focus {
    border: 2px solid ${(props) => props.theme.style.mainColor};
    outline: none;

    & + ${SearchButton} {
      ${StyledSearchIcon} {
        path {
          transition: all 0.2s linear;
          stroke: ${(props) => props.theme.style.mainColor};
        }
      }
    }
  }
`;
