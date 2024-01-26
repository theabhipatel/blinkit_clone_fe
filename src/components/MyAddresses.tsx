import { useEffect } from "react";
import { FaPlus } from "react-icons/fa6";

import MyAdressListItem from "./molecules/MyAdressListItem";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  deleteAddressAsync,
  getAddressesAsync,
  toggleSaveAddressModal,
} from "../store/user/userSlice";

const MyAddresses = () => {
  const dispatch = useAppDispatch();
  const addresses = useAppSelector((state) => state.user.addresses);

  const handleOpenSaveAddressModal = () => {
    dispatch(toggleSaveAddressModal(true));
  };

  useEffect(() => {
    dispatch(getAddressesAsync());
  }, []);

  const handleDeleteAddress = async (id: string) => {
    await dispatch(deleteAddressAsync(id));
    dispatch(getAddressesAsync());
  };

  if (addresses.length === 0) {
    return (
      <div className="w-full h-[90vh] md:h-full flex items-center flex-col gap-2 text-center ">
        <div className="h-40 w-40 mt-14">
          <img
            src="https://blinkit.com/c55c5f6ddd0e42607e6c.png"
            alt="No Saved Addresses"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-sm">You have no saved addresses</h2>
          <h3 className="text-xxs sm:text-xs text-zinc-400 mt-1">
            Tell us where you want your orders delivered
          </h3>
        </div>

        <button
          onClick={handleOpenSaveAddressModal}
          className="text-xs text-white bg-primary hover:bg-primary/90 px-2 py-2 rounded-sm mt-4 duration-300"
        >
          Add New Address
        </button>
      </div>
    );
  } else {
    return (
      <div className="w-full  min-h-[90vh] md:h-full flex  flex-col gap-2  p-2 md:p-4">
        <div>
          <h2 className="text-lg font-semibold">My addresses</h2>
          <button
            onClick={handleOpenSaveAddressModal}
            className="text-xxs text-primary flex gap-2 items-center font-semibold mt-1"
          >
            <FaPlus /> Add New Address
          </button>
        </div>
        {/* ---> address list */}
        {addresses.map((address) => {
          return (
            <MyAdressListItem
              key={address._id}
              address={address}
              handleDeleteAddress={handleDeleteAddress}
            />
          );
        })}
      </div>
    );
  }
};

export default MyAddresses;
