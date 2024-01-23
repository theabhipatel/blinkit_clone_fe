import { FC, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IAddress } from "../../interfaces";

interface IProps {
  address: IAddress;
  handleDeleteAddress: (id: string) => void;
}

const MyAdressListItem: FC<IProps> = ({ address, handleDeleteAddress }) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const { _id, name, addressType, addressLine1, addressLine2, landmark } =
    address;

  return (
    <div className="flex justify-between border-t p-2">
      <div className="flex gap-3 w-[70%]">
        <span>
          <AiOutlineHome className="text-sm mt-1" />
        </span>
        <div>
          <h3 className="text-sm font-semibold">{addressType}</h3>
          <p className="text-xxs">
            {name} - {addressLine1}, {addressLine2},{landmark} LIG Square, Rss
            Nagar, Indore, Madhya Pradesh,
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <div className="relative">
          <button
            onClick={() => setIsOptionOpen((prev) => !prev)}
            className=" rounded-full p-1 shadow-[0_0_3px_gray] text-primary cursor-pointer"
          >
            <BsThreeDots />
          </button>
          {isOptionOpen && (
            <div className="absolute -left-16 -top-3 shadow-normal flex flex-col text-xxs bg-white text-primary">
              <span className="p-1 px-3 hover:underline border-b border-zinc-300 cursor-pointer">
                Edit
              </span>
              <span
                onClick={() => handleDeleteAddress(_id)}
                className="p-1 px-3 hover:underline cursor-pointer"
              >
                Delete
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAdressListItem;
