import { FC } from "react";
import { useAppSelector } from "../store/hooks";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes: FC = () => {
  const isUserLoggedIn = useAppSelector((state) => state.auth.isUserLoggedIn);

  return isUserLoggedIn ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoutes;
