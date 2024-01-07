import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const MyAdressListItem = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  return (
    <div className="flex justify-between border-t p-2">
      <div className="flex gap-3 w-[70%]">
        <span>
          <AiOutlineHome className="text-sm mt-1" />
        </span>
        <div>
          <h3 className="text-sm font-semibold">home</h3>
          <p className="text-xxs">
            Abhishek Patel - bhawan, infront of balaji aata chhakki, chhoti
            khajrani, LIG Square, Rss Nagar, Indore, Madhya Pradesh,
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
              <span className="p-1 px-3 hover:underline border-b border-zinc-300">
                Edit
              </span>
              <span className="p-1 px-3 hover:underline">Delete</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAdressListItem;
