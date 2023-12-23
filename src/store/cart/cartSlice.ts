import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces";

interface ICartItem extends IProduct {
  quantity: number;
}

interface IInitialState {
  isCartOpen: boolean;
  cartItems: ICartItem[];
}

const initialState: IInitialState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === product._id
      );
      if (itemIndex === -1) {
        state.cartItems.push({ ...product, quantity: 1 });
      } else {
        state.cartItems[itemIndex].quantity += 1;
      }
    },
  },
});

export const { addCartItem } = cartSlice.actions;

export default cartSlice.reducer;
