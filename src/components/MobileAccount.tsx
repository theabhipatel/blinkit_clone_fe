import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlinePendingActions } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";

interface IProps {
  handleLogout: () => void;
}

const MobileAccount: FC<IProps> = ({ handleLogout }) => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className="mt-20 h-[86vh] px-3">
      <h2 className="text-xs text-zinc-500">7089589563</h2>
      <p className="mt-10 text-xxs text-zinc-500">Your Information</p>

      <div
        onClick={() => handleNavigate("/account/orders")}
        className={`w-full h-10 flex items-center duration-200 cursor-pointer  gap-2 mt-2`}
      >
        <div className="p-2 bg-zinc-100 rounded-md">
          <MdOutlinePendingActions className="text-sm text-zinc-600" />
        </div>
        <h4 className="text-xs">Orders History</h4>
      </div>
      <div
        onClick={() => handleNavigate("/account/addresses")}
        className={`w-full h-10  flex items-center  duration-200 cursor-pointer gap-2`}
      >
        <div className="p-2 bg-zinc-100 rounded-md">
          <LuMapPin className="text-sm  text-zinc-600" />
        </div>
        <h4 className="text-xs">Address Book</h4>
      </div>
      <div
        onClick={() => handleNavigate("/account/wallet")}
        className={`w-full h-10 flex items-center duration-200 cursor-pointer gap-2`}
      >
        <div className="p-2 bg-zinc-100 rounded-md">
          <HiOutlineCurrencyRupee className="text-sm  text-zinc-600" />
        </div>
        <h4 className="text-xs">Wallet Details</h4>
      </div>
      <div
        onClick={handleLogout}
        className="w-full h-10 flex items-center duration-200 cursor-pointer gap-2"
      >
        <div className="p-2 bg-zinc-100 rounded-md">
          <BsPerson className="text-sm  text-zinc-600" />
        </div>
        <h4 className="text-xs">Logout</h4>
      </div>
    </div>
  );
};

export default MobileAccount;
