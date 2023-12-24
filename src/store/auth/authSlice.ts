import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  isLoginModalOpen: boolean;
}
const initialState: IInitialState = {
  isLoginModalOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLoginModalOpenAndClose: (state, action: PayloadAction<boolean>) => {
      state.isLoginModalOpen = action.payload;
    },
  },
});

export const { toggleLoginModalOpenAndClose } = authSlice.actions;

export default authSlice.reducer;
