import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Slider = ({
  children,
  isCart,
}: {
  children: React.ReactNode;
  isCart?: boolean;
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isLeftButton, setIsLeftButton] = useState(false);

  const handleNext = () => {
    const container = sliderRef.current;
    if (container) {
      setIsLeftButton(true);
      const width = container.clientWidth;
      container.scrollLeft = container.scrollLeft + width;
    }
  };

  const handlePrev = () => {
    const container = sliderRef.current;
    if (container) {
      const width = container.clientWidth;
      container.scrollLeft = container.scrollLeft - width;

      if (!(container.scrollLeft - width > 0)) {
        setTimeout(() => {
          setIsLeftButton(false);
        }, 500);
      }
    }
  };

  return (
    <div className="relative ">
      {isLeftButton && (
        <button
          className={`absolute top-32 -left-2 z-30 p-2 bg-white hover:bg-zinc-100 rounded-full shadow-normal duration-300 `}
          onClick={handlePrev}
        >
          <FaChevronLeft className="text-xs" />
        </button>
      )}

      <button
        className="absolute top-32 -right-2 z-30 p-2 bg-white hover:bg-zinc-100  rounded-full  shadow-normal duration-300"
        onClick={handleNext}
      >
        <FaChevronRight className="text-xs" />
      </button>
      <div
        ref={sliderRef}
        className={`flex overflow-x-hidden py-5 scroll-smooth ${
          isCart ? "gap-1" : "gap-4"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
