import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAddress, getAddresses, saveAddress } from "./userApis";
import { IAddress } from "../../interfaces";

interface IInitialState {
  addresses: IAddress[];
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
  extraReducers(builder) {
    builder
      .addCase(getAddressesAsync.pending, () => {})
      .addCase(getAddressesAsync.fulfilled, (state, action) => {
        state.addresses = action.payload;
      })
      .addCase(saveAddressAsync.fulfilled, () => {})
      .addCase(deleteAddressAsync.fulfilled, () => {});
  },
});

export const { toggleSaveAddressModal } = userSlice.actions;

export default userSlice.reducer;

/** ---> Async thunk for api calling */

export const getAddressesAsync = createAsyncThunk(
  "user/get-addresses",
  async () => {
    const res = await getAddresses();
    return res;
  }
);

export const saveAddressAsync = createAsyncThunk(
  "user/save-address",
  async (address: Omit<IAddress, "_id">) => {
    const res = await saveAddress(address);
    return res;
  }
);

export const deleteAddressAsync = createAsyncThunk(
  "user/delete-address",
  async (id: string) => {
    const res = await deleteAddress(id);
    return res;
  }
);
