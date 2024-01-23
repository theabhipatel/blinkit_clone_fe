import { FC } from "react";
import AddItemToCartButton from "./AddItemToCartButton";
import { ICartItem } from "../../store/cart/cartSlice";

interface IProps {
  item: ICartItem;
}

const CartItem: FC<IProps> = ({ item }) => {
  const { thumbnail, title, unit, price, discountPercentage } = item;
  return (
    <div className="flex justify-between items-center my-2">
      <div className="w-[100%] flex gap-2">
        <div className="border border-zinc-200 rounded-md min-w-14 h-14 overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[50%] text-xxs flex flex-col">
          <h3 className=" line-clamp-2 leading-3">{title}</h3>
          <h4 className="text-zinc-400">{unit}</h4>

          {discountPercentage !== 0 ? (
            <h4>
              <span className="font-[500]">
                ₹{Math.floor(price - (price * discountPercentage) / 100)}
              </span>
              <span className="ml-1 line-through text-zinc-400">₹{price}</span>
            </h4>
          ) : (
            <h4 className="font-[500]">₹{price}</h4>
          )}
        </div>
      </div>

      <div>
        <AddItemToCartButton product={{ ...item, images: [], details: [] }} />
      </div>
    </div>
  );
};

export default CartItem;
