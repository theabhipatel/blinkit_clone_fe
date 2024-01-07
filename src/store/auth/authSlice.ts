import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, verifyOtp } from "./authApis";

interface IInitialState {
  isLoginModalOpen: boolean;
  isOtpVerificationModalOpen: boolean;
  isSuccessVerificationModalOpen: boolean;
  isAccountDropdownOpen: boolean;
  status: "loading" | "idle" | "error";
  isUserLoggedIn: boolean;
  mobile: string;
}
const initialState: IInitialState = {
  isLoginModalOpen: false,
  isOtpVerificationModalOpen: false,
  isSuccessVerificationModalOpen: false,
  isAccountDropdownOpen: false,
  status: "idle",
  isUserLoggedIn: false,
  mobile: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLoginModalOpenAndClose: (state, action: PayloadAction<boolean>) => {
      state.isLoginModalOpen = action.payload;
    },
    toggleOtpVerificationModal: (state, action: PayloadAction<boolean>) => {
      state.isOtpVerificationModalOpen = action.payload;
    },
    toggleSuccessVerificationModal: (state, action: PayloadAction<boolean>) => {
      state.isSuccessVerificationModalOpen = action.payload;
    },
    toggleAccountDropdown: (state, action: PayloadAction<boolean>) => {
      state.isAccountDropdownOpen = action.payload;
    },
    addMobileNumber: (state, action: PayloadAction<string>) => {
      state.mobile = action.payload;
    },
    setIsUserLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isUserLoggedIn = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state) => {
        state.status = "idle";
        state.isLoginModalOpen = false;
        state.isOtpVerificationModalOpen = true;
      })
      .addCase(loginUserAsync.rejected, (state) => {
        state.status = "error";
      })
      .addCase(verifyOtpAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyOtpAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isUserLoggedIn = true;
        localStorage.setItem("@accessToken", action.payload.token);
        state.isOtpVerificationModalOpen = false;
        state.isSuccessVerificationModalOpen = true;
      })
      .addCase(verifyOtpAsync.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const {
  toggleLoginModalOpenAndClose,
  toggleOtpVerificationModal,
  toggleSuccessVerificationModal,
  toggleAccountDropdown,
  addMobileNumber,
  setIsUserLoggedIn,
} = authSlice.actions;

export default authSlice.reducer;

/** ---> Async thunk for api calling */

export const loginUserAsync = createAsyncThunk(
  "auth/login",
  async (mobile: string) => {
    const res = await loginUser(mobile);
    console.log("res -->", res);
  }
);
interface IVerifyOtpAsyncParams {
  mobile: string;
  otp: number;
}
export const verifyOtpAsync = createAsyncThunk(
  "auth/verifyOtp",
  async ({ mobile, otp }: IVerifyOtpAsyncParams) => {
    // try {
    const res = await verifyOtp(mobile, otp);
    console.log("res ---->", res);
    return res;
    // } catch (error) {
    //   return error;
    // }
  }
);
