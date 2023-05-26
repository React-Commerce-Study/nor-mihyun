import React, { useEffect, useState } from "react";
import styled from "styled-components";
import prevBtn from "../assets/images/icon-swiper-1.png";
import nextBtn from "../assets/images/icon-swiper-2.png";

export default function Carousel({ data }) {
  const [current, setCurrent] = useState(0);
  const [movePercentage, setMovePercentage] = useState(`-${current}00%`);

  const moveSlide = (i) => {
    let nextIdx = current + i;

    if (nextIdx < 0) {
      nextIdx = data.length - 1;
    } else if (nextIdx >= data.length) {
      nextIdx = 0;
    }

    setCurrent(nextIdx);
  };

  useEffect(() => {
    setMovePercentage(`-${current}00%`);
  }, [current]);

  useEffect(() => {
    const timer = setTimeout(() => {
      moveSlide(1);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <CarouselWrapper>
      <CarouselBox movePercentage={movePercentage}>
        {data.map((item) => (
          <img key={item.id} src={item.img_url} alt={item.img_name} />
        ))}
      </CarouselBox>
      <Controls>
        <button type="button" onClick={() => moveSlide(-1)}>
          <img src={prevBtn} alt="이전 슬라이드 이동 버튼" />
        </button>
        <SubControlsWrapper>
          {data.map((item, idx) => (
            <li key={item.id}>
              <SubControlBtn
                type="button"
                current={idx === current}
                onClick={() => setCurrent(idx)}
              />
            </li>
          ))}
        </SubControlsWrapper>
        <button type="button" onClick={() => moveSlide(1)}>
          <img src={nextBtn} alt="다음 슬라이드 이동 버튼" />
        </button>
      </Controls>
    </CarouselWrapper>
  );
}

Carousel.defaultProps = {
  data: [],
};

const CarouselWrapper = styled.article`
  height: 500px;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;
`;

const CarouselBox = styled.div`
  display: flex;
  transform: translate(${(props) => props.movePercentage});
  transition: all 0.3s ease-in-out;

  img {
    width: 100%;
    object-fit: cover;
    flex-shrink: 0;
  }
`;

const Controls = styled.div`
  ${(props) => props.theme.variables.flex("row", "space-between")}
  ${(props) => props.theme.variables.absoluteCenter};
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

const SubControlsWrapper = styled.ul`
  display: flex;
  gap: 6px;
  align-self: flex-end;
  margin-bottom: 20px;
`;

const SubControlBtn = styled.button`
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: ${(props) => (props.current ? "#000" : "#fff")};
  padding: 0;
`;
