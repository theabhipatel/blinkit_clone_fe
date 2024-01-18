import React, { useState, useRef } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useAppDispatch } from "../store/hooks";
import {
  getAddressesAsync,
  saveAddressAsync,
  toggleSaveAddressModal,
} from "../store/user/userSlice";
import { useFormik } from "formik";

const initialValues = {
  courtesyTitle: "Mr",
  name: "",
  addressLine1: "",
  addressLine2: "",
  addressType: "",
  latitude: 0,
  longitude: 0,
  landmark: "",
};

const SaveAdressModal = () => {
  const dispatch = useAppDispatch();
  const otherAddressTypeRef = useRef<HTMLInputElement>(null);
  const [addressType, setAddressType] = useState("Home");

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(saveAddressAsync({ ...values, addressType })).then(() =>
        dispatch(getAddressesAsync())
      );
      handleModalClose();
    },
  });

  const handleModalClose = () => {
    dispatch(toggleSaveAddressModal(false));
  };

  const handlePreventClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleOtherClick = () => {
    setAddressType("");
    otherAddressTypeRef.current?.focus();
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={handleModalClose}
        className="w-full h-full bg-black/70 flex justify-center items-center"
      >
        <div
          onClick={handlePreventClick}
          className="relative w-[43rem] h-[26rem] bg-white rounded-r-xl flex  items-center overflow-hidden"
        >
          <div className="map w-[45%] h-full bg-blue-500"></div>
          <div className="adress w-[55%] h-full p-5 ">
            <div className="flex justify-between items-center">
              <h3 className=" font-bold">Enter complete address</h3>
              <button onClick={handleModalClose}>
                <IoCloseCircle className="text-zinc-500 text-xl cursor-pointer" />
              </button>
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              This allow us to find you easily and give you timely delivery
              experience
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-full mt-3 text-[11px] flex flex-col gap-2"
            >
              <div className="flex gap-3">
                <select
                  name="courtesyTitle"
                  value={values.courtesyTitle}
                  onChange={handleChange}
                  className="border-[1.5px] border-zinc-300 rounded-md p-1 outline-none"
                >
                  <option value="Miss">Miss</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Mr">Mr</option>
                </select>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Receiver's name"
                  className="border-[1.5px] border-zinc-300 rounded-md p-2 w-full outline-none"
                />
              </div>

              <input
                type="text"
                name="addressLine1"
                value={values.addressLine1}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Flat / House / Office No."
                className="border-[1.5px] border-zinc-300 rounded-md p-2 w-full outline-none"
              />
              <input
                type="text"
                name="addressLine2"
                value={values.addressLine2}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Street / Society / Office Name "
                className="border-[1.5px] border-zinc-300 rounded-md p-2 w-full outline-none"
              />

              <div className="w-full h-32">
                <p>Save address as</p>
                <div className="mt-2 flex gap-3">
                  <div
                    onClick={() => setAddressType("Home")}
                    className={`border-[1.5px] ${
                      addressType === "Home"
                        ? "border-primary"
                        : "border-zinc-300"
                    }   p-1 px-2 rounded-md cursor-pointer`}
                  >
                    Home
                  </div>
                  <div
                    onClick={() => setAddressType("Work")}
                    className={`border-[1.5px] ${
                      addressType === "Work"
                        ? "border-primary"
                        : "border-zinc-300"
                    }   p-1 px-2 rounded-md cursor-pointer`}
                  >
                    Work
                  </div>
                  <div
                    onClick={handleOtherClick}
                    className={`border-[1.5px] ${
                      addressType !== "Home" && addressType !== "Work"
                        ? "border-primary"
                        : "border-zinc-300"
                    }   p-1 px-2 rounded-md cursor-pointer`}
                  >
                    Other
                  </div>
                </div>
                {addressType !== "Home" && addressType !== "Work" && (
                  <input
                    type="text"
                    value={addressType}
                    ref={otherAddressTypeRef}
                    onChange={(e) => setAddressType(e.target.value)}
                    placeholder="Nickname of your adress"
                    className="border-[1.5px] border-zinc-300 rounded-md p-2 w-full outline-none mt-2"
                  />
                )}
              </div>

              <button
                type="submit"
                className="w-full text-center text-xs py-3 bg-primary text-white rounded-md font-semibold"
              >
                Save Address
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveAdressModal;
