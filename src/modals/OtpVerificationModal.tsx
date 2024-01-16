import { FC, useState, useEffect, useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import {
  toggleLoginModalOpenAndClose,
  toggleOtpVerificationModal,
  verifyOtpAsync,
} from "../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { GrCircleAlert } from "react-icons/gr";
import OtpInput from "../components/molecules/OTPInput";

interface IProps {}

const OtpVerificationModal: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const mobileNumber = useAppSelector((state) => state.auth.mobile);
  const authStatus = useAppSelector((state) => state.auth.status);
  const [resendOtpTime, setResendOtpTime] = useState(0);

  useEffect(() => {
    setResendOtpTime(30);
    let id = setInterval(() => {
      setResendOtpTime((prev) => (prev !== 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const handleBackAction = () => {
    dispatch(toggleOtpVerificationModal(false));
    dispatch(toggleLoginModalOpenAndClose(true));
  };

  const handleOtpSubmit = (otp: string) => {
    dispatch(verifyOtpAsync({ mobile: mobileNumber, otp: +otp }));
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        id="container"
        className="w-full h-full bg-black/70 flex justify-center items-center"
      >
        <div className="relative w-[28rem] h-[15rem] bg-white rounded-xl  flex flex-col items-center justify-between gap-2 overflow-hidden">
          <div className="w-full flex justify-center items-center shadow-sm p-3">
            <div
              onClick={handleBackAction}
              className="absolute left-3 top-2 p-2 cursor-pointer"
            >
              <BsArrowLeft />
            </div>
            <h2 className="text-sm font-[500]">OTP Verification</h2>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h4 className="text-xs ">We have sent a verification code to</h4>
            <h4 className="text-xs font-semibold tracking-wide">
              +91-{mobileNumber}
            </h4>
            {/* ---> OTP input fields  */}

            <OtpInput
              length={4}
              onOtpSubmit={handleOtpSubmit}
              error={authStatus === "error"}
            />
            <div className="h-5 mt-3">
              {authStatus === "loading" ? (
                <div className="flex space-x-2 justify-center items-center">
                  <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
                </div>
              ) : (
                <>
                  {resendOtpTime > 0 ? (
                    <p className="text-xs text-zinc-400">
                      Resend Code (in {resendOtpTime} secs)
                    </p>
                  ) : (
                    <p className="text-xs text-primary cursor-pointer">
                      Resend Code
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          {/* ---> verification faild bottom  */}
          {authStatus === "error" ? (
            <div className="w-full h-8 bg-red-50 text-red-400 flex justify-center items-center text-xs gap-2">
              <GrCircleAlert className="mt-[3px]" />
              Verification Failed.
            </div>
          ) : (
            <div className="h-8"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationModal;
