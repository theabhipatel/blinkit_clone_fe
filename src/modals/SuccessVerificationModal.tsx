import { FC, useEffect } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useAppDispatch } from "../store/hooks";
import { toggleSuccessVerificationModal } from "../store/auth/authSlice";
interface IProps {}

const SuccessVerificationModal: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleSuccessVerificationModal(false));
    }, 1000);

    return () => {};
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      <div
        id="container"
        className="w-full h-full bg-black/70 flex justify-center items-center"
      >
        <div className="relative w-[95%] sm:w-[28rem] h-[12rem] bg-white rounded-xl  flex flex-col items-center justify-center gap-2 text-primary">
          <IoCheckmarkCircle className="text-4xl" />
          <p className="text-xs tracking-wide font-[500]">
            Successfully logged in!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessVerificationModal;
