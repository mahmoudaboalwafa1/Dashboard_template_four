import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AsideDataRegiester, AsideData } from "./data/AsideData";

const Aside = () => {
  const userAuth = useSelector((state) => state.UserAuth.user);
  function loopOnLinks(aside) {
    return aside.map((aside, index) => {
      const { icon, text, to } = aside;
      return (
        <NavLink to={to} key={index}>
          <li>
            <i className={icon}></i>
            <p>{text}</p>
          </li>
        </NavLink>
      );
    });
  }

  return (
    <aside>
      <h3>
        {userAuth?.displayName
          ? userAuth.displayName.slice(userAuth.displayName.indexOf(" "))
          : "Register"}
      </h3>
      <ul>
        {userAuth ? loopOnLinks(AsideData) : loopOnLinks(AsideDataRegiester)}
      </ul>
    </aside>
  );
};

export default Aside;
