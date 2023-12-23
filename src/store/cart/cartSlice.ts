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
    toggleCartOpenAndClose: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
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
    removeOneCartItem: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );
      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].quantity === 1) {
          state.cartItems.splice(itemIndex, 1);
        } else {
          state.cartItems[itemIndex].quantity -= 1;
        }
      }
    },
  },
});

export const { toggleCartOpenAndClose, addCartItem, removeOneCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
