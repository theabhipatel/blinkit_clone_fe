import { IoMdArrowDropright } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleCartOpenAndClose } from "../../store/cart/cartSlice";

const MobileCartButton = () => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector((state) => state.cart.totalItems);
  const discountedAmount = useAppSelector(
    (state) => state.cart.discountedAmount
  );

  const handleCartOpen = () => {
    dispatch(toggleCartOpenAndClose(true));
  };

  return (
    <div
      onClick={handleCartOpen}
      className="fixed z-50 bottom-4 left-3 right-3 h-11 bg-primary rounded-md shadow-[0px_5px_25px_5px] shadow-black/40 text-white flex justify-between items-center px-2"
    >
      <div className="flex gap-2">
        <div className="flex justify-center items-center rounded-md bg-[#379646] px-2">
          <HiOutlineShoppingCart />
        </div>
        <div className="text-xxs">
          <p>
            {totalItems}
            {totalItems > 1 ? " items" : " item"}
          </p>
          <p className="text-xs">₹ {discountedAmount}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-xs">View Card</span>
        <IoMdArrowDropright className="text-xl " />
      </div>
    </div>
  );
};

export default MobileCartButton;
