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
  const [message, setMessage] = useState("");
  const [showSignout, setShowSignout] = useState(false);
  const [keyWord] = useInput("", "search", "Type A Keyword");
  const userAuth = useSelector((state) => state.UserAuth.user);
  const changeMode = () => {
    setMode(!mode);
    dispatch(ChangeModeDispatch(mode ? "LightMode" : "DarkMode"));
  };

  const [showNotification, setShowNotification] = useState(false);
  const ShowNotificationArea = () => {
    Notification.requestPermission().then((request) => {
      request === "granted" &&
        new Notification(`Welcome To Dashboard , ${userAuth.displayName}`, {
          body: `Hello ${userAuth.displayName} this control panel is not yet completed and will be developed [Mahmoud Abo Alwafa]`,
          icon: userAuth.photoURL,
          dir: "rtl",
        });
    });
    userAuth && setShowNotification(!showNotification);
    setShowSignout(false);
  };

  const handleSignOut = () => {
    dispatch(SetUserAuth(null));
    signOut(auth).then(() => setMessage("You have been logged out"));
    setShowSignout(false);
  };

  const handleShowSignout = () => {
    userAuth && setShowSignout(!showSignout);
    setShowNotification(false);
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
        message,
        setMessage,
      }}
    >
      {children}
    </ContextNavbar.Provider>
  );
};

export { ContextNavbarProvider, ContextNavbar };
