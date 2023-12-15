import { FC } from "react";
import AddButton from "./molecules/AddButton";
import { NavLink } from "react-router-dom";
import DeliveryTime from "./molecules/DeliveryTime";

interface IProps {
  width?: string;
}

const ProductCard: FC<IProps> = ({ width }) => {
  const prn = "balaji-ratlami-sev";
  const prid = "112620";

  return (
    <>
      <div
        className={` ${
          width ? `min-w-[8rem]` : "min-w-[9rem]"
        } max-w-[9rem]  h-[14.2rem] border border-gray-300 rounded-md p-3 text-zinc-700 bg-white shadow-md`}
      >
        <div className="h-[50%] flex justify-center items-center ">
          <NavLink to={`/prn/${prn}/prid/${prid}`} className={"h-full"}>
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/329500a.jpg?ts=1687949315"
              alt="product cart"
              className="h-full w-full object-cover"
            />
          </NavLink>
        </div>

        <DeliveryTime size="M" />
        <NavLink to={`/prn/${prn}/prid/${prid}`}>
          <div className="mt-2 h-[3.2rem] flex flex-col justify-between">
            <h3 className="text-[11px] font-semibold">
              Amul Fresh Malai Paneer and this is...
            </h3>
            <h6 className="text-xxs text-gray-400">200 g</h6>
          </div>
        </NavLink>
        <div className="mt-2 flex justify-between items-center ">
          <div className="flex flex-col justify-center items-center">
            <h6 className="text-xxs font-semibold">₹88</h6>
            <h6 className="text-[11px] text-zinc-400 font-[300] leading-none line-through">
              ₹98
            </h6>
          </div>
          <AddButton />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
