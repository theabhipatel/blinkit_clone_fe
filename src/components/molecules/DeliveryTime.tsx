import { FC } from "react";

interface IProps {
  size?: "M" | "L";
}

const DeliveryTime: FC<IProps> = ({ size }) => {
  return (
    <div
      className={`${
        size === "M" ? "w-12" : "w-14"
      } px-[2px] py-[1px]  flex  items-center bg-gray-100 rounded-sm`}
    >
      <img
        src="/timer.avif"
        alt="timer"
        className={`${size === "M" ? "h-3" : "h-4"} `}
      />
      <span
        className={`${size === "M" ? "text-[8px]" : "text-[10px]"} font-bold`}
      >
        9 MINS
      </span>
    </div>
  );
};

export default DeliveryTime;
