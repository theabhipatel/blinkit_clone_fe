import { GoCheckCircleFill } from "react-icons/go";
import { NavLink } from "react-router-dom";
const PaymentSuccess = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center ">
        <h1 className="text-2xl font-semibold">
          Your Order is Successfully Placed
        </h1>
        <GoCheckCircleFill className="text-[5rem] text-primary my-3" />
        <p>Thank you for Shoping.</p>
        <div className="flex gap-5 flex-wrap mt-5 md:mt-10">
          <NavLink
            to="/account/orders"
            className="p-1 px-3 bg-primary text-white rounded-md"
          >
            See Your Orders
          </NavLink>
          <NavLink
            to={"/"}
            className="p-1 px-3 bg-primary text-white rounded-md"
          >
            Continue Shoping
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
