import { FC, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineCircle, MdCheckCircle } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  TSelectAddress,
  getAddressesAsync,
  selectAddress,
  toggleSaveAddressModal,
} from "../store/user/userSlice";
import { IAddress } from "../interfaces";

interface IProps {
  setIsMyAdressPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartMyAdress: FC<IProps> = ({ setIsMyAdressPage }) => {
  const dispatch = useAppDispatch();
  const addresses = useAppSelector((state) => state.user.addresses);
  const selectedAddress = useAppSelector((state) => state.user.selectedAddress);

  /** ---> getting the addresses on page load. */
  useEffect(() => {
    dispatch(getAddressesAsync());
  }, []);

  const handleOpenSaveAddressModal = () => {
    dispatch(toggleSaveAddressModal(true));
  };

  const handleClosePage = () => {
    setIsMyAdressPage(false);
  };

  const handleSelectAddress = (address: IAddress) => {
    dispatch(selectAddress(address));
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
        <div
          onClick={handleOpenSaveAddressModal}
          className="flex gap-3 py-2 px-5 items-center cursor-pointer"
        >
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
          {addresses.map((address) => {
            const { _id, addressType, courtesyTitle, name, addressLine1 } =
              address;
            return (
              <div key={address._id} className="flex  gap-2 ">
                <div
                  onClick={() => handleSelectAddress(address)}
                  className="w-[10%] mt-1 cursor-pointer"
                >
                  {selectedAddress._id === _id ? (
                    <MdCheckCircle className="text-lg text-primary" />
                  ) : (
                    <MdOutlineCircle className="text-lg text-primary" />
                  )}
                </div>
                <div className="w-[80%]">
                  <h2 className="text-sm font-bold">{addressType} </h2>
                  <h3 className="text-xxs mt-1 leading-3">
                    {courtesyTitle} {name}
                  </h3>
                  <p className="text-xxs">{addressLine1}</p>
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
