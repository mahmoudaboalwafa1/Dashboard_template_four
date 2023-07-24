import React from "react";
import Collection from "./../../components/collection";
import FriendsData from "./data/FriendsData";
import style from "../../css/pages/friends.module.css";
import FriendsClasses from "./classNames/FriendsClasses";

const Friends = () => {
  const { classOne, classTwo, classThree, classFour } = FriendsClasses;
  const { classFive, classSix, classSeven, classEight } = FriendsClasses;
  const { classNine, classTen, classEleven, classTwelve } = FriendsClasses;
  return (
    <Collection MainTitle="Friends">
      <div className={`${style.profiles} pt-20`}>
        {FriendsData.map((friend, index) => {
          const { friendImg, name, jop, friends } = friend;
          const { projects, articles, join } = friend;
          return (
            <div key={index} className={`${style.profile} ${classOne}`}>
              <div className="container">
                <div className={`${style.icons} ${classTwo}`}>
                  <i className={classThree}></i>
                  <i className={classFour}></i>
                </div>
                <div className={`${style.image} ${classFive}`}>
                  <img src={friendImg} alt={`friend-${index + 1}`} />
                </div>
                <ul className="pb-10">
                  <li className="pb-10">{name}</li>
                  <li className="text-gray">{jop}</li>
                </ul>
                <div className={`${style.bo} pt-20`}>
                  <i className={classSix}></i>
                  <span className="ps-10">{friends}</span>
                </div>
                <div className="pt-10">
                  <i className={classSeven}></i>
                  <span className="ps-10">{projects}</span>
                </div>
                <div className={`${style.bo3} ${classNine}`}>
                  <i className={classEight}></i>
                  <span className="ps-10">{articles}</span>
                </div>
                <div className={`${style.control} ${classTen}`}>
                  <div className={style.joined}>
                    <p className="text-gray">{join}</p>
                  </div>
                  <div className={style.btns}>
                    <a className={classEleven} href="#">
                      Profile
                    </a>
                    <a className={classTwelve} href="#">
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
  );
};

export default Friends;
