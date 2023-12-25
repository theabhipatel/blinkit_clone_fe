import { FC } from "react";
import { FaCircleCheck } from "react-icons/fa6";
interface IProps {}

const SuccessVerificationModal: FC<IProps> = () => {
  return (
    <div className="fixed inset-0 z-50">
      <div
        id="container"
        // onClick={handleLoginModalClose}
        className="w-full h-full bg-black/70 flex justify-center items-center"
      >
        <div className="relative w-[28rem] h-[12rem] bg-white rounded-xl  flex flex-col items-center gap-2">
          <FaCircleCheck />
          <p className="text-primary">Successfully logged in!</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessVerificationModal;
