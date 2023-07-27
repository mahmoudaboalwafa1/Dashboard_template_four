import React from "react";
import { AvatarImg } from "../../../images";
import style from "../../../css/pages/profile.module.css";
import ProfileSettingsClasses from "../classNames/ProfileSettingsClasses";
import ProfileSettingsDatas from "../data/ProfileSettingsData";
import DatasProfileSettings from "./datasProfileSettings";
import { useSelector } from "react-redux";

const ProfileSettings = () => {
  const { sectionProfileSettings, infoContainer } = ProfileSettingsClasses;
  const { rateBox, textUser, textGray } = ProfileSettingsClasses;
  const { containerStars, stars, showUser } = ProfileSettingsDatas;
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <section className={sectionProfileSettings}>
      <div className="container">
        <div className={infoContainer}>
          <div className={style.prof}>
            <img src={AvatarImg} alt="profile" />
            <p className={textUser}>{showUser(userInfo)}</p>
            <p className={textGray}>Level 20</p>
            <div className={containerStars}>
              {stars.map((star, i) => (
                <i key={i} className={star}></i>
              ))}
            </div>
            <p className={rateBox}>550 Rating</p>
          </div>
          <DatasProfileSettings />
        </div>
      </div>
    </section>
  );
};

export default ProfileSettings;
