import { FC } from "react";

interface IProps {
  size?: "sm" | "md" | "lg";
}

const Loader: FC<IProps> = ({ size = "md" }) => {
  switch (size) {
    case "sm":
      return (
        <div className="h-7 w-7 border-2 border-white border-t-2 border-r-2 border-b-2 border-t-primary border-r-primary border-b-primary rounded-full animate-spin " />
      );
    case "md":
      return (
        <div className="h-9 w-9 border-[3px] border-white border-t-[2.5px] border-r-[2.5px] border-b-[2.5px] border-t-primary border-r-primary border-b-primary rounded-full animate-spin " />
      );
    case "lg":
      return (
        <div className="h-12 w-12 border-4 border-white border-t-[3px] border-r-[3px] border-b-[3px] border-t-primary border-r-primary border-b-primary rounded-full animate-spin " />
      );
  }
};

export default Loader;
