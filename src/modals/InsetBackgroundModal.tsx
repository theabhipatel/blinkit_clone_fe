import { FC } from "react";

interface IProps {}

const InsetBackgroundModal: FC<IProps> = () => {
  return (
    <div className="fixed inset-0 z-40">
      <div
        id="container"
        // onClick={handleLoginModalClose}
        className="w-full h-full relative bg-black/50 flex justify-center items-center"
      ></div>
    </div>
  );
};

export default InsetBackgroundModal;
