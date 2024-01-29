import Cart from "../components/Cart";
import LoginModal from "./LoginModal";
import OtpVerificationModal from "./OtpVerificationModal";
import SuccessVerificationModal from "./SuccessVerificationModal";
import { useAppSelector } from "../store/hooks";
import InsetBackgroundModal from "./InsetBackgroundModal";
import SaveAdressModal from "./SaveAdressModal";
import MobileCartButton from "../components/molecules/MobileCartButton";
import { useEffect, useState } from "react";
import InfoModal from "./InfoModal";

const Modals = () => {
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isLoginModalOpen = useAppSelector(
    (state) => state.auth.isLoginModalOpen
  );
  const isOtpVerificationModalOpen = useAppSelector(
    (state) => state.auth.isOtpVerificationModalOpen
  );
  const isSuccessVerificationModalOpen = useAppSelector(
    (state) => state.auth.isSuccessVerificationModalOpen
  );
  const isAccountDropdownOpen = useAppSelector(
    (state) => state.auth.isAccountDropdownOpen
  );
  const isSaveAddressModalOpen = useAppSelector(
    (state) => state.user.isSaveAddressModalOpen
  );
  const isMobile = useAppSelector((state) => state.cart.isMobile);
  const totalItems = useAppSelector((state) => state.cart.totalItems);
  const [isInfoModal, setIsInfoModal] = useState(true);

  useEffect(() => {
    const isInfoModal = sessionStorage.getItem("isInfoModal");
    if (isInfoModal) {
      setIsInfoModal(false);
    }
  }, []);

  return (
    <>
      {isCartOpen && <Cart />}
      {isLoginModalOpen && <LoginModal />}
      {isOtpVerificationModalOpen && <OtpVerificationModal />}
      {isSuccessVerificationModalOpen && <SuccessVerificationModal />}
      {isAccountDropdownOpen && <InsetBackgroundModal />}
      {isSaveAddressModalOpen && <SaveAdressModal />}
      {totalItems > 0 && !isCartOpen && isMobile && <MobileCartButton />}
      {isInfoModal && <InfoModal setIsInfoModal={setIsInfoModal} />}
    </>
  );
};

export default Modals;
