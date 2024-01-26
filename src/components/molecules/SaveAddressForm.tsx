import { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoCloseCircle } from "react-icons/io5";
import {
  getAddressesAsync,
  saveAddressAsync,
  toggleSaveAddressModal,
} from "../../store/user/userSlice";
import { useAppDispatch } from "../../store/hooks";

const addressSchema = Yup.object({
  courtesyTitle: Yup.string().required(),
  name: Yup.string().min(3).required("Please enter name"),
  addressLine1: Yup.string().required("Please enter Flat / House / Office No."),
  addressLine2: Yup.string().required(
    "Please enter Street / Society / Office Name"
  ),
  addressType: Yup.string(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
  landmark: Yup.string(),
});

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

const SaveAddressForm = () => {
  const dispatch = useAppDispatch();
  const otherAddressTypeRef = useRef<HTMLInputElement>(null);
  const [addressType, setAddressType] = useState("Home");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: addressSchema,
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

  const handleOtherClick = () => {
    setAddressType("");
    otherAddressTypeRef.current?.focus();
  };
  return (
    <div className="adress w-full md:w-[55%] h-full p-2 md:p-5 ">
      <div className="flex justify-between items-center">
        <h3 className=" font-bold">Enter complete address</h3>
        <button className="hidden md:block" onClick={handleModalClose}>
          <IoCloseCircle className="text-zinc-500 text-xl cursor-pointer" />
        </button>
      </div>
      <p className="text-xxs md:text-[11px] text-zinc-500 mt-1">
        This allow us to find you easily and give you timely delivery experience
      </p>
      <form
        onSubmit={handleSubmit}
        className="relative w-full h-full mt-3 text-[11px] flex flex-col gap-2"
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
        {touched.name && errors.name && (
          <p className="text-xxs text-red-400">*{errors.name}</p>
        )}

        <input
          type="text"
          name="addressLine1"
          value={values.addressLine1}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Flat / House / Office No."
          className="border-[1.5px] border-zinc-300 rounded-md p-2 w-full outline-none"
        />
        {touched.addressLine1 && errors.addressLine1 && (
          <p className="text-xxs text-red-400">*{errors.addressLine1}</p>
        )}
        <input
          type="text"
          name="addressLine2"
          value={values.addressLine2}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Street / Society / Office Name "
          className="border-[1.5px] border-zinc-300 rounded-md p-2 w-full outline-none"
        />
        {touched.addressLine2 && errors.addressLine2 && (
          <p className="text-xxs text-red-400">*{errors.addressLine2}</p>
        )}

        <div className="w-full md:h-32">
          <p>Save address as</p>
          <div className="mt-2 flex gap-3">
            <div
              onClick={() => setAddressType("Home")}
              className={`border-[1.5px] ${
                addressType === "Home" ? "border-primary" : "border-zinc-300"
              }   p-1 px-2 rounded-md cursor-pointer`}
            >
              Home
            </div>
            <div
              onClick={() => setAddressType("Work")}
              className={`border-[1.5px] ${
                addressType === "Work" ? "border-primary" : "border-zinc-300"
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
            <>
              <input
                type="text"
                name="addressType"
                value={addressType}
                ref={otherAddressTypeRef}
                onChange={(e) => setAddressType(e.target.value)}
                placeholder="Nickname of your address"
                className="border-[1.5px] border-zinc-300 rounded-md p-2 w-full outline-none mt-2"
              />
              {!addressType && (
                <p className="text-xxs text-red-400">
                  * Nickname of your address is required.
                </p>
              )}
            </>
          )}
        </div>

        <button
          type="submit"
          className="w-full text-center text-xs py-3 bg-primary text-white rounded-md font-semibold md:absolute bottom-16"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default SaveAddressForm;
