import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Slider = ({ children }: { children: React.ReactNode }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    const container = sliderRef.current;
    if (container) {
      const width = container.clientWidth;
      container.scrollLeft = container.scrollLeft + width;
    }
  };

  const handlePrev = () => {
    const container = sliderRef.current;
    if (container) {
      const width = container.clientWidth;
      container.scrollLeft = container.scrollLeft - width;
    }
  };
  return (
    <div className="relative ">
      <button
        className={`absolute top-32 -left-5 p-2 bg-white hover:bg-zinc-100 rounded-full shadow-normal duration-300 `}
        onClick={handlePrev}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-32 -right-5 p-2 bg-white hover:bg-zinc-100  rounded-full  shadow-normal duration-300"
        onClick={handleNext}
      >
        <FaChevronRight />
      </button>
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden py-5 gap-4 scroll-smooth"
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
