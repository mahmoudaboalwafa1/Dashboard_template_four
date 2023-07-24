import React from "react";
import SecurityClasses from "../classNames/SecurityClasses";
import style from "../../../css/pages/settings.module.css";
import { useSelector } from "react-redux";

const Security = () => {
  const bodyMode = useSelector((state) => state.modeNow);
  const { mainClass, textCenter, spaceBetween, textInfo } = SecurityClasses;
  const { textGray, devicesDark } = SecurityClasses;
  return (
    <section className={mainClass}>
      <div className="container">
        <h1 className={textCenter}>Security Info</h1>
        <p className={textGray}>Security Information About Your Account</p>
        <div className={spaceBetween}>
          <ul className="pt-20">
            <li className="pb-5">Password</li>
            <li className="text-gray fs-15">Last Change On 25/10/2021</li>
          </ul>
          <a className={textInfo} href="#">
            Change
          </a>
        </div>
        <div className={`${spaceBetween} pt-20`}>
          <ul>
            <li className="pb-5">Two-Factor Authentication</li>
            <li className={textGray.slice(0, -6)}>
              Enable/Disable The Feature
            </li>
          </ul>
          <input className={style.toggle} type="checkbox" />
        </div>
        <div className={`${spaceBetween.slice(0, -6)} pt-20`}>
          <ul>
            <li className={`${style.device} pb-5`}>Devices</li>
            <li className="text-gray fs-15">Check The Login Devices List</li>
          </ul>
          <a className={devicesDark(bodyMode)} href="#">
            Devices
          </a>
        </div>
      </div>
    </section>
  );
};

export default Security;
