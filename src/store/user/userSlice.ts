import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  addresses: [];
  isSaveAddressModalOpen: boolean;
}

const initialState: IInitialState = {
  addresses: [],
  isSaveAddressModalOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSaveAddressModal: (state, action: PayloadAction<boolean>) => {
      state.isSaveAddressModalOpen = action.payload;
    },
  },
});

export const { toggleSaveAddressModal } = userSlice.actions;

export default userSlice.reducer;
