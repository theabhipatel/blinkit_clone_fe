import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

const SaveAdressModal = () => {
  const [courtesyTitle, setCourtesyTitle] = useState("Mr");
  const handleModalClose = () => {};

  const handlePreventClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              <IoCloseCircle className="text-zinc-500 text-xl cursor-pointer" />
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
                  defaultValue={courtesyTitle}
                  value={courtesyTitle}
                  onChange={(e) => setCourtesyTitle(e.target.value)}
                  className="border-[1.5px] border-zinc-300 rounded-md p-1 outline-none"
                >
                  <option value="Miss">Miss</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Mr">Mr</option>
                </select>
                <input
                  type="text"
                  placeholder="Receiver's name"
                  className="border-[1.5px] border-zinc-300 rounded-md p-2 w-full outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Flat / House / Office No."
                className="border-[1.5px] border-zinc-300 rounded-md p-2 w-full outline-none"
              />
              <input
                type="text"
                placeholder="Street / Society / Office Name "
                className="border-[1.5px] border-zinc-300 rounded-md p-2 w-full outline-none"
              />

              <div className="w-full h-32">
                <p>Save address as</p>
                <div className="mt-2 flex gap-3">
                  <span className="border-[1.5px] border-zinc-300  p-1 px-2 rounded-md cursor-pointer">
                    Home
                  </span>
                  <span className="border-[1.5px] border-zinc-300  p-1 px-2 rounded-md cursor-pointer">
                    Work
                  </span>
                  <span className="border border-primary bg-green-50/40 p-1 px-2 rounded-md cursor-pointer">
                    Other
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Nickname of your adress"
                  className="border-[1.5px] border-zinc-300 rounded-md p-2 w-full outline-none mt-2"
                />
              </div>
              <button className="w-full text-center text-xs py-3 bg-primary text-white rounded-md font-semibold">
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
