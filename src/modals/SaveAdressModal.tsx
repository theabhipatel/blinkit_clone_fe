import React from "react";
import { useAppDispatch } from "../store/hooks";
import { toggleSaveAddressModal } from "../store/user/userSlice";
import SaveAddressForm from "../components/molecules/SaveAddressForm";

const SaveAdressModal = () => {
  const dispatch = useAppDispatch();

  const handleModalClose = () => {
    dispatch(toggleSaveAddressModal(false));
  };

  const handlePreventClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={handleModalClose}
        className="w-full h-full bg-black/70 flex justify-center items-center"
      >
        <div
          onClick={handlePreventClick}
          className="relative w-full md:w-[43rem] md:h-[26rem] bg-white rounded-r-xl flex flex-col md:flex-row items-center overflow-hidden"
        >
          <div className="map  md:w-[45%] h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12378.569217728606!2d75.86037957133615!3d22.721897831892914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1246ae310b%3A0x2bf544615bbb4407!2sGandhi%20Hall!5e0!3m2!1sen!2sin!4v1705592105543!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <SaveAddressForm />
        </div>
      </div>
    </div>
  );
};

export default SaveAdressModal;
