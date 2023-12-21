import { FC } from "react";
import AddButton from "./molecules/AddButton";
import { NavLink } from "react-router-dom";
import DeliveryTime from "./molecules/DeliveryTime";
import { IProduct } from "../interfaces";

interface IProps {
  width?: string;
  product: IProduct;
}

const ProductCard: FC<IProps> = ({ width, product }) => {
  const { _id, title, price, discountPercentage, unit, thumbnail } = product;
  const prn = title.toLowerCase().split(" ").join("-");
  return (
    <>
      <div
        className={` ${
          width ? `min-w-[8rem]` : "min-w-[9rem]"
        } max-w-[9rem]  h-[14.2rem] border border-gray-300 rounded-md p-3 text-zinc-700 bg-white shadow-md`}
      >
        <div className="h-[48%] flex justify-center items-center ">
          <NavLink to={`/prn/${prn}/prid/${_id}`} className={"h-full"}>
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover"
            />
          </NavLink>
        </div>
        <div className="mt-1" />
        <DeliveryTime size="M" />
        <NavLink to={`/prn/${prn}/prid/${_id}`}>
          <div className="mt-2 h-[3.2rem] flex flex-col justify-between">
            <h3 className="text-[11px] font-semibold">{title}</h3>
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
              <h6 className="text-xxs font-semibold">₹88</h6>
            )}
          </div>
          <AddButton />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
