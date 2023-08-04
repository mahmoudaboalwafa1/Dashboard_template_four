import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Signin from "../Regiester/Signin";
import Guest from "../Regiester/Guest";

const RequireAuth = ({ children }) => {
  const userAuth = useSelector((state) => state.UserAuth.user);
  if (userAuth) {
    return children;
  } else {
    return <Signin />;
  }
};

export default RequireAuth;
