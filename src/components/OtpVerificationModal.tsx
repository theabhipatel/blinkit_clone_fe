import { FC, useState, useEffect, useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import {
  toggleLoginModalOpenAndClose,
  toggleOtpVerificationModal,
  toggleSuccessVerificationModal,
} from "../store/auth/authSlice";
import { useAppDispatch } from "../store/hooks";

interface IProps {}
let currentIndex = 0;

const OtpVerificationModal: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (otp.join("").length === 4) {
      setTimeout(() => {
        dispatch(toggleSuccessVerificationModal(true));
        dispatch(toggleOtpVerificationModal(false));
      }, 3000);
    }
  }, [otp]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // @ts-ignore
    if (isNaN(e.target.value)) return false;

    setOtp([
      ...otp.map((item, idx) => (idx === index ? e.target.value : item)),
    ]);

    // if (!e.target.value) setActiveIndex((prevIndex) => prevIndex - 1);
    // else
    setActiveIndex((prevIndex) => prevIndex + 1);

    // if (e.target.nextSibling) {
    //   e.target.nextSibling.focus();
    // }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      currentIndex = index;
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeIndex]);

  // ==================================
  const handleLoginModalClose = (e: any) => {
    if (e.target.id === "container") {
      dispatch(toggleLoginModalOpenAndClose(false));
    }
  };

  const handleBackAction = () => {
    dispatch(toggleOtpVerificationModal(false));
    dispatch(toggleLoginModalOpenAndClose(true));
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        id="container"
        onClick={handleLoginModalClose}
        className="w-full h-full bg-black/70 flex justify-center items-center"
      >
        <div className="relative w-[28rem] h-[17rem] bg-white rounded-xl  flex flex-col items-center gap-2">
          <div className="w-full flex justify-center items-center shadow-sm p-3">
            <div
              onClick={handleBackAction}
              className="absolute left-3 top-2 p-2 cursor-pointer"
            >
              <BsArrowLeft />
            </div>
            <h2 className="text-sm font-[500]">OTP Verification</h2>
          </div>

          <h4 className="text-xs mt-5">We have sent a verification code to</h4>
          <h4 className="text-xs font-semibold tracking-wide">
            +91-7089589563
          </h4>

          {/* <div className="relative w-[80%]  h-9 flex items-center gap-2 text-xs font-[500] ">
              <input
                type="tel"
                maxLength={4}
                autoFocus
                name="mobNumber"
                value={mobNumber}
                onChange={(e) => setMobNumber(e.target.value)}
                placeholder="1 2 3 4"
                className="outline-none w-full h-full    px-5 tracking-[2.5rem]  z-50 bg-transparent"
              />
            </div> */}

          <div className="flex gap-2">
            {otp.map((data, index) => {
              return (
                <input
                  type="text"
                  name="otp"
                  ref={activeIndex === index ? inputRef : null}
                  value={data}
                  maxLength={1}
                  key={index}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="border border-gray-300 rounded-md w-10 h-10 text-center outline-none focus:border-gray-500"
                />
              );
            })}
          </div>
          {otp.join("").length === 4 ? (
            <div className="flex space-x-2 justify-center items-center bg-white h-screen ">
              <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
            </div>
          ) : (
            <p className="mt-3 text-xs text-zinc-400">
              Resend code (in 30 secs)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationModal;
