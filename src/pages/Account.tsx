import { useLocation, useNavigate } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePendingActions } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import MyOrders from "../components/MyOrders";

const Account = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className=" flex justify-center ">
      <div className="mt-[5.5rem] mb-10 w-[90%] lg:w-[70%] h-[30rem] shadow-normal flex">
        <div className="side-bar w-[30%] sm:w-[25%] text-xxs sm:text-xs text-zinc-500  border-r border-zinc-200">
          <div className="w-full h-32 flex items-end justify-center border-b border-zinc-200 pb-3">
            +917089589563
          </div>
          <div
            onClick={() => handleNavigate("/account/addresses")}
            className={`w-full h-10 border-b border-zinc-200 ${
              pathname === "/account/addresses" ? "bg-zinc-100" : ""
            } flex items-center hover:bg-zinc-100 duration-200 cursor-pointer px-5 gap-2`}
          >
            <LuMapPin className="text-sm" />
            My Addresses
          </div>
          <div
            onClick={() => handleNavigate("/account/orders")}
            className={`w-full h-10 border-b border-zinc-200 ${
              pathname === "/account/orders" ? "bg-zinc-100" : ""
            } flex items-center hover:bg-zinc-100 duration-200 cursor-pointer px-5 gap-2`}
          >
            <MdOutlinePendingActions className="text-sm" />
            My Orders
          </div>
          <div
            onClick={() => handleNavigate("/account/wallet")}
            className={`w-full h-10 border-b border-zinc-200 ${
              pathname === "/account/wallet" ? "bg-zinc-100" : ""
            } flex items-center hover:bg-zinc-100 duration-200 cursor-pointer px-5 gap-2`}
          >
            <HiOutlineCurrencyRupee className="text-sm" />
            My Wallet
          </div>
          <div className="w-full h-10 border-b border-zinc-200 flex items-center hover:bg-zinc-100 duration-200 cursor-pointer px-5 gap-2">
            <BsPerson className="text-sm" />
            Logout
          </div>
        </div>
        <div className="w-[75%] ">
          {pathname === "/account/orders" && <MyOrders />}
        </div>
      </div>
    </div>
  );
};

export default Account;
