import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setIsUserLoggedIn,
  toggleAccountDropdown,
} from "../../store/auth/authSlice";
import { useNavigate } from "react-router-dom";

const AccountDropDown = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mobileNum = useAppSelector((state) => state.auth.mobile);

  const handleLogout = () => {
    localStorage.removeItem("@accessToken");
    dispatch(setIsUserLoggedIn(false));
    dispatch(toggleAccountDropdown(false));
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    dispatch(toggleAccountDropdown(false));
  };

  return (
    <div className="absolute top-11 -right-12 bg-white rounded-b-xl w-[14rem] h-72 z-50 flex flex-col text-start">
      <h4 className="text-sm px-3 mt-3 font-bold text-zinc-600">My Account</h4>
      <span className="text-xxs px-3 tracking-wider text-zinc-500 leading-3">
        {mobileNum} 7089589563
      </span>
      <ul className="w-full mt-3 flex flex-col gap-1  text-[11px] text-zinc-500 cursor-pointer ">
        <li
          onClick={() => handleNavigate("/account/orders")}
          className={`px-3 py-1 hover:bg-gray-100 duration-300 flex`}
        >
          My Orders
        </li>
        <li
          onClick={() => handleNavigate("/account/addresses")}
          className={`px-3 py-1 hover:bg-gray-100 duration-300 flex `}
        >
          Saved Address
        </li>
        <li
          onClick={() => handleNavigate("/account/wallet")}
          className={`px-3 py-1 hover:bg-gray-100 flex justify-between duration-300`}
        >
          <span>My Wallet</span>
          <span>₹0</span>
        </li>
        <li className="px-3 py-1 hover:bg-gray-100 ">FAQ's</li>
        <li onClick={handleLogout} className="px-3 py-1 hover:bg-gray-100 ">
          Log Out
        </li>
      </ul>
      <div className="flex gap-2 px-3 items-center mt-2  cursor-default">
        <div className="w-16 h-16 bg-red-400">
          <img src="/qr-code.png" alt="theabhipatel qr code " />
        </div>
        <div className="w-[60%] text-zinc-600">
          <h1 className="text-[13px] font-bold leading-4">
            Simple way to <br /> get groceries <br />{" "}
            <span className="text-blue-400"> in minutes</span>
          </h1>
          <h3 className="text-xxs leading-3 ">
            Scan the QR code and download blinkit app
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AccountDropDown;
