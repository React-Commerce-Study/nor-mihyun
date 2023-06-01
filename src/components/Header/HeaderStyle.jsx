import styled from "styled-components";

export const PageHeader = styled.header`
  width: 100%;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

export const HeaderWrapper = styled.div`
  max-width: 1280px;
  padding: 20px 0;
  margin: 0 auto;

  ${(props) => props.theme.variables.flex("row", "space-between")}
`;

export const HeaderSearch = styled.div`
  ${(props) => props.theme.variables.flex}
  gap: 30px;
`;
