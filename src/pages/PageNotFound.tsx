import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col px-5 md:px-0 md:flex-row gap-5 justify-center items-center ">
      <img src="/not-found.webp" alt="not-found-image" className="h-60" />
      <div className="flex flex-col gap-3 text-xs text-center">
        <h3 className="text-2xl font-bold">Oops!</h3>
        <h4 className="text-base ">
          The page you are looking for can’t be found.
        </h4>
        <h5 className="text-zinc-400">You might find these links useful</h5>
        <div className="flex flex-col gap-1 ">
          <NavLink to={"/"} className="text-green-600">
            Go to Home
          </NavLink>
          <NavLink to={"/"} className="text-green-600">
            Learn about blinkit
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
