import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces";

export interface ICartItem extends IProduct {
  quantity: number;
}

interface IInitialState {
  isCartOpen: boolean;
  cartItems: ICartItem[];
  totalItems: number;
  totalAmount: number;
  discountedAmount: number;
}

/** ---> getting data from localstorage. */
const localCart = localStorage.getItem("cart");
const { cartItems, totalAmount, totalItems, discountedAmount } = localCart
  ? (JSON.parse(localCart) as Omit<IInitialState, "isCartOpen">)
  : {
      cartItems: [],
      totalItems: 0,
      totalAmount: 0,
      discountedAmount: 0,
    };

const initialState: IInitialState = {
  isCartOpen: false,
  cartItems,
  totalItems,
  totalAmount,
  discountedAmount,
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
      state.totalItems = state.cartItems.reduce((acc, curItem) => {
        return (acc += curItem.quantity);
      }, 0);
      state.totalAmount = state.cartItems.reduce((acc, curItem) => {
        return (acc += curItem.price * curItem.quantity);
      }, 0);
      state.discountedAmount = state.cartItems.reduce((acc, curItem) => {
        return (acc += Math.round(
          curItem.price *
            (1 - curItem.discountPercentage / 100) *
            curItem.quantity
        ));
      }, 0);

      /** ---> Saving data to localstorage. */
      const dataForSave = JSON.stringify({
        cartItems: current(state.cartItems),
        totalItems: state.totalItems,
        totalAmount: state.totalAmount,
        discountedAmount: state.discountedAmount,
      });
      localStorage.setItem("cart", dataForSave);
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
        state.totalItems = state.cartItems.reduce((acc, curItem) => {
          return (acc += curItem.quantity);
        }, 0);
        state.totalAmount = state.cartItems.reduce((acc, curItem) => {
          return (acc += curItem.price * curItem.quantity);
        }, 0);
        state.discountedAmount = state.cartItems.reduce((acc, curItem) => {
          return (acc += Math.round(
            curItem.price *
              (1 - curItem.discountPercentage / 100) *
              curItem.quantity
          ));
        }, 0);

        /** ---> Saving data to localstorage. */
        const dataForSave = JSON.stringify({
          cartItems: current(state.cartItems),
          totalItems: state.totalItems,
          totalAmount: state.totalAmount,
          discountedAmount: state.discountedAmount,
        });
        localStorage.setItem("cart", dataForSave);
      }
    },
  },
});

export const { toggleCartOpenAndClose, addCartItem, removeOneCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
