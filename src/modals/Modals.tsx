import Cart from "../components/Cart";
import LoginModal from "./LoginModal";
import OtpVerificationModal from "./OtpVerificationModal";
import SuccessVerificationModal from "./SuccessVerificationModal";
import { useAppSelector } from "../store/hooks";

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
  return (
    <>
      {isCartOpen && <Cart />}
      {isLoginModalOpen && <LoginModal />}
      {isOtpVerificationModalOpen && <OtpVerificationModal />}
      {isSuccessVerificationModalOpen && <SuccessVerificationModal />}
    </>
  );
};

export default Modals;
