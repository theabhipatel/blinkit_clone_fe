import { FC, useEffect, useRef, useState } from "react";

interface IProps {
  length: number;
  onOtpSubmit: (otp: string) => void;
  error: boolean;
}

const OtpInput: FC<IProps> = ({ length, onOtpSubmit, error }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    // @ts-ignore
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleClick = (index: number) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  return (
    <div className="flex gap-2 mt-3">
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            key={index}
            value={value}
            ref={(input) => {
              if (input) {
                inputRefs.current[index] = input;
              }
            }}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onClick={() => handleClick(index)}
            className={`border  ${
              error
                ? "border-red-400 focus:border-red-500"
                : "border-gray-300 focus:border-gray-500"
            } rounded-md w-10 h-10 text-center outline-none `}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
