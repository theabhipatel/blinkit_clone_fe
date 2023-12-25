import { axiosInstance } from "../../utils/axiosInstance";

export const loginUser = async (mobile: string) => {
  try {
    const res = await axiosInstance.post(`/auth/login-signup`, { mobile });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const verifyOtp = async (mobile: string, otp: number) => {
  try {
    const res = await axiosInstance.post(`/auth/verify-otp`, { mobile, otp });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
