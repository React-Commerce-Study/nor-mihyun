import React from "react";
import {
  SearchButton,
  SearchInput,
  SearchInputWrapper,
  StyledSearchIcon,
} from "./SearchFormStyle";

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
          <StyledSearchIcon />
        </SearchButton>
      </SearchInputWrapper>
    </form>
  );
}
