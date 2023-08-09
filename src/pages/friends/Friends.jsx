import React from "react";
import Collection from "./../../components/Collection";
import FriendsData from "./data/FriendsData";
import style from "../../css/pages/friends.module.css";
import FriendsClasses from "./classNames/FriendsClasses";
import RequireAuth from "../Regiester/RequireAuth";
import { Link } from "react-router-dom";

const Friends = () => {
  const { profileBox, iconsBox, iconPhone, iconEmail } = FriendsClasses;
  const { boxImg, iconSmile, iconCommit, iconNewspaper } = FriendsClasses;
  const { boxControl, boxInfo, btnInfo, btnDanger } = FriendsClasses;
  return (
    <RequireAuth>
      <Collection MainTitle="Friends">
        <div className={`${style.profiles} pt-20`}>
          {FriendsData.map((friend, index) => {
            const { friendImg, name, jop, friends } = friend;
            const { projects, articles, join } = friend;
            return (
              <div key={index} className={profileBox}>
                <div className="container">
                  <div className={iconsBox}>
                    <i className={iconPhone}></i>
                    <i className={iconEmail}></i>
                  </div>
                  <div className={boxImg}>
                    <img src={friendImg} alt={`friend-${index + 1}`} />
                  </div>
                  <ul className="pb-10">
                    <li className="pb-10">{name}</li>
                    <li className="text-gray">{jop}</li>
                  </ul>
                  <div className={`${style.bo} pt-20`}>
                    <i className={iconSmile}></i>
                    <span className="ps-10">{friends}</span>
                  </div>
                  <div className="pt-10">
                    <i className={iconCommit}></i>
                    <span className="ps-10">{projects}</span>
                  </div>
                  <div className={boxInfo}>
                    <i className={iconNewspaper}></i>
                    <span className="ps-10">{articles}</span>
                  </div>
                  <div className={boxControl}>
                    <div className={style.joined}>
                      <p className="text-gray">{join}</p>
                    </div>
                    <div className={style.btns}>
                      <Link
                        to={"/friends/adelsamy"}
                        className={btnInfo}
                        href="#"
                      >
                        Profile
                      </Link>
                      <a className={btnDanger} href="#">
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <></>
      </Collection>
    </RequireAuth>
  );
};

export default Friends;
