import Cart from "../components/Cart";
import LoginModal from "./LoginModal";
import OtpVerificationModal from "./OtpVerificationModal";
import SuccessVerificationModal from "./SuccessVerificationModal";
import { useAppSelector } from "../store/hooks";
import InsetBackgroundModal from "./InsetBackgroundModal";
import SaveAdressModal from "./SaveAdressModal";

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

  return (
    <>
      {isCartOpen && <Cart />}
      {isLoginModalOpen && <LoginModal />}
      {isOtpVerificationModalOpen && <OtpVerificationModal />}
      {isSuccessVerificationModalOpen && <SuccessVerificationModal />}
      {isAccountDropdownOpen && <InsetBackgroundModal />}
      {/* <SaveAdressModal /> */}
    </>
  );
};

export default Modals;
