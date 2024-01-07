import { FC } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineCircle, MdCheckCircle } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

interface IProps {
  setIsMyAdressPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartMyAdress: FC<IProps> = ({ setIsMyAdressPage }) => {
  const handleClosePage = () => {
    setIsMyAdressPage(false);
  };
  return (
    <div className="w-[20rem] h-full  bg-white text-zinc-800 overflow-x-auto">
      {/* ---> header  */}
      <div className="fixed top-0 w-full h-12  px-4 bg-white flex gap-3 items-center ">
        <button onClick={handleClosePage}>
          <IoMdArrowBack />
        </button>
        <h4 className="text-xs font-bold">My Adresses</h4>
      </div>
      {/* ---> body */}
      <div className="w-full my-10">
        {/* ---> Add a new address */}
        <div className="flex gap-3 py-2 px-5 items-center ">
          <div className="w-[10%] ">
            <FiPlusCircle className="text-2xl text-primary" />
          </div>
          <div className="w-[90%]">
            <h4 className="text-[13px]"> Add a new address in</h4>
            <p className="text-xxs">
              34/1, near mahakal juice centre, LIG Square, LIG Colony, Indore,
              Madhya Pradesh 452010, India
            </p>
          </div>
        </div>
        {/* ---> Choose Delivery Address */}
        <div className="p-3 bg-zinc-200/80 ">
          <h4 className="text-xxs text-zinc-400">Choose Delivery Address</h4>
        </div>
        {/* ---> Adress list */}
        <div className="p-2 flex flex-col gap-5">
          {[...new Array(5)].map((_, index) => {
            return (
              <div className="flex  gap-2 ">
                <div className="w-[10%] mt-1 cursor-pointer">
                  {index === 0 ? (
                    <MdCheckCircle className="text-lg text-primary" />
                  ) : (
                    <MdOutlineCircle className="text-lg text-primary" />
                  )}
                </div>
                <div className="w-[80%]">
                  <h2 className="text-sm font-bold">home </h2>
                  <h3 className="text-xxs mt-1 leading-3">mr Abhishek Patel</h3>
                  <p className="text-xxs">
                    bhawan infront of balaji aata chhakki, chhoti khajrani
                  </p>
                </div>
                <div className="w-[10%] mt-1">
                  <BsThreeDots className="text-xl text-black" />
                </div>
              </div>
            );
          })}
        </div>
        {/* ---> footer  */}
        <div
          onClick={handleClosePage}
          className="fixed bottom-0  w-[20rem] h-10  px-4 bg-primary hover:bg-primary cursor-pointer flex  items-center justify-center  text-white text-xs"
        >
          Done
        </div>
      </div>
    </div>
  );
};

export default CartMyAdress;
