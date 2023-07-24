import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ChangeModeDispatch } from "../redux/actionMethod";
import NavbarClasses from "./classNames/NavClasses";
import NotificationArea from "./NotificationArea";
import { AvatarImg } from "../images/index";

const Nav = () => {
  const dispatch = useDispatch();
  const modeBody = useSelector((state) => state.modeNow);
  const [mode, setMode] = useState(false);
  const changeMode = () => {
    setMode(!mode);
    dispatch(ChangeModeDispatch(mode ? "LightMode" : "DarkMode"));
  };
  const { classOne, classTwo, classThree } = NavbarClasses[0];
  const { classFour, classFive, classSix } = NavbarClasses[0];
  const [showNotification, setShowNotification] = useState(false);
  const ShowNotificationArea = () => {
    setShowNotification(!showNotification);
  };

  modeBody === "DarkMode"
    ? (document.body.className = "dark")
    : (document.body.className = "light");

  return (
    <nav className={classOne}>
      <form className={classTwo}>
        <i className={classThree}></i>
        <input
          className={classFour}
          type="search"
          placeholder="Type A Keyword"
        />
      </form>
      <div className={classFive}>
        <input
          type="checkbox"
          checked={mode}
          onChange={changeMode}
          className="darkmode"
        />
        <i onClick={ShowNotificationArea} className={classSix}></i>
        {showNotification && <NotificationArea />}
        <img src={AvatarImg} />
      </div>
    </nav>
  );
};

export default Nav;
