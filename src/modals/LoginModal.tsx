import React, { FC, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import {
  addMobileNumber,
  loginUserAsync,
  toggleLoginModalOpenAndClose,
} from "../store/auth/authSlice";
import { useAppDispatch } from "../store/hooks";

interface IProps {}

const LoginModal: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const [mobNumber, setMobNumber] = useState<string>("");

  const handleChange = (value: any) => {
    if (isNaN(value)) return false;
    setMobNumber(value);
  };

  const handleLoginModalClose = () => {
    dispatch(toggleLoginModalOpenAndClose(false));
  };

  const handlePreventClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleLoginModalCloseOnBackButton = () => {
    dispatch(toggleLoginModalOpenAndClose(false));
  };

  const handleLogin = () => {
    if (mobNumber.length === 10) {
      dispatch(loginUserAsync(mobNumber));
      dispatch(addMobileNumber(mobNumber));
    } else {
      // TODO:  have to use formik for form validation
    }
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={handleLoginModalClose}
        className="w-full h-full bg-black/70 flex justify-center items-start"
      >
        <div
          onClick={handlePreventClick}
          className="relative w-[95%] sm:w-[80% sm:w-[28rem] h-[17rem] bg-white rounded-xl p-3 flex flex-col items-center gap-2 mt-24"
        >
          <div
            onClick={handleLoginModalCloseOnBackButton}
            className="absolute left-3 top-2 p-2 cursor-pointer"
          >
            <BsArrowLeft />
          </div>
          <div className="w-12 h-12">
            <img
              src="/app-logo.svg"
              alt="blinkit-app-logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold">India's last minute app</h1>
          <h3 className=" text-xs text-zinc-700 font-[500]">
            Log in or Sign up
          </h3>
          <div className="mt-3 w-[60%] flex flex-col gap-3">
            <div className="relative w-full  h-9 flex items-center gap-2 text-xs font-[500] ">
              <span className="absolute left-3">+91</span>
              <input
                type="tel"
                maxLength={10}
                autoFocus
                name="mobNumber"
                value={mobNumber}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Enter mobile number"
                className="outline-none w-full h-full rounded-md  border border-zinc-300 px-10 focus:border-zinc-500"
              />
            </div>
            <button
              onClick={handleLogin}
              className={`w-full h-9  rounded-lg  text-white text-sm ${
                mobNumber.length === 10 ? "bg-primary" : "bg-gray-500"
              }`}
            >
              Continue
            </button>
          </div>

          <p className="mt-3 text-xxs text-zinc-500">
            By continuing, you agree to our Terms of service & Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
