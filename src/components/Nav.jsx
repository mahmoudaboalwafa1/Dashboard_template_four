import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ChangeModeDispatch } from "../redux/actionMethod";
import NavbarClasses from "./classNames/NavClasses";
import NotificationArea from "./NotificationArea";
import { AvatarImg } from "../images/index";
import useInput from "../context/useInput";

const Nav = () => {
  const dispatch = useDispatch();
  const modeBody = useSelector((state) => state.modeNow);
  const [mode, setMode] = useState(false);
  const [keyWord] = useInput("", "search", "Type A Keyword");
  const changeMode = () => {
    setMode(!mode);
    dispatch(ChangeModeDispatch(mode ? "LightMode" : "DarkMode"));
  };
  const { navbar, alignCenter, iconSearch } = NavbarClasses[0];
  const { styleInput, accContainer, bellIcon } = NavbarClasses[0];
  const [showNotification, setShowNotification] = useState(false);
  const ShowNotificationArea = () => {
    setShowNotification(!showNotification);
  };

  modeBody === "DarkMode"
    ? (document.body.className = "dark")
    : (document.body.className = "light");

  return (
    <nav className={navbar}>
      <form className={alignCenter}>
        <i className={iconSearch}></i>
        <input className={styleInput} {...keyWord} />
      </form>
      <div className={accContainer}>
        <input
          type="checkbox"
          checked={mode}
          onChange={changeMode}
          className="darkmode"
        />
        <i onClick={ShowNotificationArea} className={bellIcon}></i>
        {showNotification && <NotificationArea />}
        <img src={AvatarImg} />
      </div>
    </nav>
  );
};

export default Nav;
