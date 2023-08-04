import React, { useState, createContext } from "react";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { ChangeModeDispatch, SetUserAuth } from "../redux/actionMethod";
import useInput from "./useInput";
import { auth } from "../firebase";

const ContextNavbar = createContext();

const ContextNavbarProvider = ({ children }) => {
  const dispatch = useDispatch();
  const modeBody = useSelector((state) => state.modeNow);
  const [mode, setMode] = useState(false);
  const [showSignout, setShowSignout] = useState(false);
  const [keyWord] = useInput("", "search", "Type A Keyword");
  const userAuth = useSelector((state) => state.UserAuth.user);
  const changeMode = () => {
    setMode(!mode);
    dispatch(ChangeModeDispatch(mode ? "LightMode" : "DarkMode"));
  };

  const [showNotification, setShowNotification] = useState(false);
  const ShowNotificationArea = () => {
    userAuth && setShowNotification(!showNotification);
  };

  const handleSignOut = () => {
    dispatch(SetUserAuth(null));
    signOut(auth).then(() => console.log("Signout"));
    setShowSignout(false);
  };

  const handleShowSignout = () => {
    userAuth && setShowSignout(!showSignout);
  };
  modeBody === "DarkMode"
    ? (document.body.className = "dark")
    : (document.body.className = "light");

  return (
    <ContextNavbar.Provider
      value={{
        mode,
        keyWord,
        showNotification,
        changeMode,
        ShowNotificationArea,
        handleShowSignout,
        handleSignOut,
        showSignout,
      }}
    >
      {children}
    </ContextNavbar.Provider>
  );
};

export { ContextNavbarProvider, ContextNavbar };
