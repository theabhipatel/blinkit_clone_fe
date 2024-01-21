import { FC } from "react";
import AddButton from "./molecules/AddItemToCartButton";
import { NavLink } from "react-router-dom";
import DeliveryTime from "./molecules/DeliveryTime";
import { IProduct } from "../interfaces";

interface IProps {
  width?: string;
  product: IProduct;
}

const ProductCard: FC<IProps> = ({ width, product }) => {
  const { _id, title, price, discountPercentage, unit, thumbnail, stock } =
    product;
  const prn = title.toLowerCase().split(" ").join("-");
  return (
    <>
      <div
        className={` ${
          width ? `min-w-[8rem]` : "min-w-[9rem]"
        } max-w-[9rem]  h-[14.2rem] border border-gray-300 rounded-md p-3 text-zinc-700 bg-white shadow-md  ${
          stock === 0 && "opacity-60"
        }`}
      >
        <div className="h-[48%] flex justify-center items-center ">
          <NavLink
            to={`/prn/${prn}/prid/${_id}`}
            className={"h-full relative bg-red-400"}
          >
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover"
            />
            {stock === 0 && (
              <div className="absolute bottom-5  w-full ">
                <div className="text-[10px] text-white  bg-black/70 rounded-md flex items-center justify-center py-1">
                  Out of Stock
                </div>
              </div>
            )}
          </NavLink>
        </div>
        <div className="mt-1" />
        <DeliveryTime size="M" />
        <NavLink to={`/prn/${prn}/prid/${_id}`}>
          <div className="mt-2 h-[3.2rem] flex flex-col justify-between">
            <h3 className="text-[11px] font-semibold line-clamp-2">{title}</h3>
            <h6 className="text-xxs text-gray-400">{unit}</h6>
          </div>
        </NavLink>
        <div className="mt-2 flex justify-between items-center ">
          <div className="flex flex-col justify-center items-center">
            {discountPercentage !== 0 ? (
              <>
                <h6 className="text-xxs font-semibold">
                  ₹{Math.floor(price - (price * discountPercentage) / 100)}
                </h6>
                <h6 className="text-[11px] text-zinc-400 font-[300] leading-none line-through">
                  ₹{price}
                </h6>
              </>
            ) : (
              <h6 className="text-xxs font-semibold">₹{price}</h6>
            )}
          </div>
          {stock > 0 && <AddButton product={product} />}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
