import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes: FC = () => {
  const token = localStorage.getItem("@accessToken");

  return token ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoutes;
