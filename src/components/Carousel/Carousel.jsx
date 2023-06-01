import React, { useEffect, useState } from "react";
import prevBtn from "../../assets/images/icon-swiper-1.png";
import nextBtn from "../../assets/images/icon-swiper-2.png";
import {
  CarouselBox,
  CarouselWrapper,
  Controls,
  SubControlBtn,
  SubControlsWrapper,
} from "./CarouselStyle";

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
