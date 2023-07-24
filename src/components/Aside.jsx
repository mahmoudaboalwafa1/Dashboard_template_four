import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AsideData from "./data/AsideData";

const Aside = () => {
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <aside>
      <h1>{userInfo[0].lastName ? userInfo[0].lastName : "User"}</h1>
      <ul>
        {AsideData.map((aside, index) => {
          const { icon, text, to } = aside;
          return (
            <NavLink to={to} key={index}>
              <li>
                <i className={icon}></i>
                <p>{text}</p>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </aside>
  );
};

export default Aside;
