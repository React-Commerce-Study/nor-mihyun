import styled from "styled-components";

export const CarouselWrapper = styled.article`
  height: 500px;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;
`;

export const CarouselBox = styled.div`
  display: flex;
  transform: translate(${(props) => props.movePercentage});
  transition: all 0.3s ease-in-out;

  img {
    width: 100%;
    object-fit: cover;
    flex-shrink: 0;
  }
`;

export const Controls = styled.div`
  ${(props) => props.theme.variables.flex("row", "space-between")}
  ${(props) => props.theme.variables.absoluteCenter};
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

export const SubControlsWrapper = styled.ul`
  display: flex;
  gap: 6px;
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const SubControlBtn = styled.button`
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: ${(props) => (props.current ? "#000" : "#fff")};
  padding: 0;
`;
