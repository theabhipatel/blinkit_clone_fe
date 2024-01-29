import { FC, SetStateAction } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { IoInformationCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

interface IProps {
  setIsInfoModal: React.Dispatch<SetStateAction<boolean>>;
}

const InfoModal: FC<IProps> = ({ setIsInfoModal }) => {
  return (
    <div className="fixed inset-0 z-50">
      <div
        id="container"
        className="w-full h-full bg-black/70 flex justify-center items-center"
      >
        <div className="relative w-[95%] sm:w-[28rem]  bg-white rounded-xl  flex flex-col items-center  gap-2 p-5 md:px-10">
          <div
            onClick={() => setIsInfoModal(false)}
            className="absolute top-3 right-4"
          >
            <IoCloseCircle className="text-2xl text-black/60 cursor-pointer" />
          </div>
          <div className="flex  items-center gap-2 text-red-500">
            <IoInformationCircleSharp className="text-2xl" />
            <h2 className="text-xl font-semibold">Information</h2>
          </div>
          <h3> Welcome to Blinkit clone</h3>
          <p className="text-xs tracking-wide">
            &nbsp; &nbsp; &nbsp; &nbsp; I am using free service of Render.com to
            host my api. Render spins down a Free web service that goes 15
            minutes without receiving any request. Render spins the service back
            up whenever it next receives a request to process. Spinning up a
            service takes a few minutes (2-3).{" "}
            <span className="font-bold">
              So you have to wait for a while to load data from api.
            </span>
          </p>
          <div className="flex gap-6 mt-2">
            <NavLink
              to={"https://www.theabhipatel.com/"}
              target="_theabhipatel.com"
              className="text-xs sm:text-sm bg-green-50 border border-primary rounded-md text-primary px-2 py-1 duration-300 hover:text-white hover:bg-primary"
            >
              Check Portfolio
            </NavLink>
            <button
              onClick={() => setIsInfoModal(false)}
              className="text-xs sm:text-sm bg-green-50 border border-primary rounded-md text-primary px-2 py-1 duration-300 hover:text-white hover:bg-primary"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
