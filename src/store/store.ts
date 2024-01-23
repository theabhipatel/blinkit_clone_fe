import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
