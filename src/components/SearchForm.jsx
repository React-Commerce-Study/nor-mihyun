import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/images/icon-search.svg";

export default function SearchForm() {
  return (
    <form>
      <label htmlFor="top-nav-search-input" className="a11y-hidden">
        상품 검색창
      </label>
      <SearchInputWrapper>
        <SearchInput
          type="text"
          id="top-nav-search-input"
          placeholder="상품을 검색해보세요!"
        />
        <SearchButton type="submit">
          <SearchIcon />
          {/* <img src={searchIcon} alt="검색 버튼 아이콘" /> */}
        </SearchButton>
      </SearchInputWrapper>
    </form>
  );
}

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchButton = styled.button`
  padding: 0;
  transform: translateX(-44px);
`;

const SearchInput = styled.input`
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
      ${SearchIcon} {
        path {
          transition: all 0.2s linear;
          stroke: ${(props) => props.theme.style.mainColor};
        }
      }
    }
  }
`;
