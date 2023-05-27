import { useState, useEffect } from "react";

export function useScrollChecker() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;

      // 현재 footer의 높이 : 298px
      setIsBottom(window.innerHeight + scrollTop + 298 >= offsetHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return isBottom;
}
