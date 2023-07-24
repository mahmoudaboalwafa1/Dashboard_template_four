import React from "react";
import style from "../../../css/pages/home.module.css";
import { classesSocial } from "./classNames/HomeClassNames";
import { useSelector } from "react-redux";

const Social = () => {
  const {
    classOne,
    classTwo,
    classThree,
    classFour,
    classFive,
    classSix,
    classSeven,
    classEight,
  } = classesSocial;
  const socialInfo = useSelector((state) =>
    state.socialInfo ? state.socialInfo : false
  );

  return (
    <section className={`${style.social} ${classOne}`}>
      <div className="container">
        <h1 className={`${style.center} fs-25`}>Social Media Stats</h1>
        <div className={`${style.socials} ${style.twit} ${classTwo}`}>
          <i className={`${style.twitter} ${classThree}`}></i>
          <div className={`${style.follow} ${classFour}`}>
            <span className="ps-20">90K Followers</span>
            <a
              href={socialInfo ? socialInfo[0].twitter : "UserName"}
              className="pe-20"
            >
              Follow
            </a>
          </div>
        </div>
        <div className={`${style.socials} ${style.face} ${classFive}`}>
          <i className={`${style.facebook} ${classSix}`}></i>
          <div className={`${style.like} ${classFour}`}>
            <span className="ps-20">2M Like</span>
            <a
              href={socialInfo ? socialInfo[1].facebook : "UserName"}
              className="pe-20"
            >
              Like
            </a>
          </div>
        </div>
        <div className={`${style.socials} ${style.youtube} ${classFive}`}>
          <i className={`${style.you} ${classSeven}`}></i>
          <div className={`${style.sub} ${classFour}`}>
            <span className="ps-20">1M Subs</span>
            <a
              href={socialInfo ? socialInfo[3].youtube : "UserName"}
              className="pe-20"
            >
              Subsrcibe
            </a>
          </div>
        </div>
        <div className={`${style.socials} ${style.link} ${classFive}`}>
          <i className={`${style.linkdin} ${classEight}`}></i>
          <div className={`${style.foll} ${classFour}`}>
            <span className="ps-20">70K Followers</span>
            <a
              href={socialInfo ? socialInfo[2].linkedin : "UserName"}
              className="pe-20"
            >
              Follow
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
