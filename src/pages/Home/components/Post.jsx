import React from "react";
import style from "../../../css/pages/home.module.css";
import { AvatarImg } from "../../../images/index";
import { classesPost } from "./classNames/HomeClassNames";
import { useSelector } from "react-redux";

const Post = () => {
  const {
    classOne,
    classTwo,
    classThree,
    classFour,
    classFive,
    classSix,
    classSeven,
    classEight,
  } = classesPost;
  const userInfo = useSelector((state) => state.userInfo);
  return (
    <section className={`${style.post} ${classOne}`}>
      <div className="container">
        <div className="text-sm-center">
          <h1 className={`${style.center} fs-25`}>Latest Post</h1>
        </div>
        <div className={`${style.posts} ${classTwo}`}>
          <img src={AvatarImg} alt="profile" />
          <div className={`${style.posttext}  ps-20`}>
            <h1>
              {userInfo[0].firstName
                ? `${userInfo[0].firstName} ${userInfo[0].lastName}`
                : "userName"}
            </h1>
            <p className="text-gray">About 3 Hours Ago</p>
          </div>
        </div>
        <p className={`${style.post} ${classThree}`}>
          You Can Fool All Of The People Some Of The Time, And Some Of The
          People All Of The Time, But You Can't Fool All Of The People All Of
          The Time.{" "}
        </p>
        <div className={`${style.reacts} ${classFour}`}>
          <div className={classFive}>
            <i className={classSix}></i>
            <span>1.8K</span>
          </div>
          <div className={classSeven}>
            <i className={classEight}></i>
            <span>500</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
