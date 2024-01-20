import { FC } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IProduct } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addCartItem, removeOneCartItem } from "../../store/cart/cartSlice";

interface IProps {
  product: IProduct;
}

const AddItemToCartButton: FC<IProps> = ({ product }) => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();
  const cartProduct = cartItems.find((item) => item._id === product._id);

  const handleIncQty = () => {
    dispatch(addCartItem(product));
  };

  const handleDecQty = () => {
    dispatch(removeOneCartItem(product._id));
  };

  return (
    <>
      {cartProduct === undefined ? (
        <button
          onClick={handleIncQty}
          className="w-14 px-4 py-1 border border-primary rounded-md text-xs text-primary font-semibold bg-green-50 cursor-pointer"
        >
          ADD
        </button>
      ) : (
        <div className="bg-primary text-white flex justify-between items-center w-14 rounded-md ">
          <button onClick={handleDecQty} className=" px-[0.35rem] py-2 ">
            <FaMinus className="text-xxs h-full " />
          </button>
          <span className="text-xxs font-semibold">{cartProduct.quantity}</span>
          <button onClick={handleIncQty} className=" px-[0.35rem] py-2 ">
            <FaPlus className="text-xxs" />
          </button>
        </div>
      )}
    </>
  );
};

export default AddItemToCartButton;
