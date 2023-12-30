import { FC } from "react";
import { useAppDispatch } from "../store/hooks";
import { toggleAccountDropdown } from "../store/auth/authSlice";

interface IProps {}

const InsetBackgroundModal: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  const handleDoropDownToggle = (e: any) => {
    if (e.target.id === "container") {
      dispatch(toggleAccountDropdown(false));
    }
  };
  return (
    <div className="fixed inset-0 z-40">
      <div
        id="container"
        onClick={handleDoropDownToggle}
        className="w-full h-full relative bg-black/50 flex justify-center items-center"
      ></div>
    </div>
  );
};

export default InsetBackgroundModal;
