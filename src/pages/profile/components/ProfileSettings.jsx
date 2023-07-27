import React from "react";
import { AvatarImg } from "../../../images";
import style from "../../../css/pages/profile.module.css";
import ProfileSettingsClasses from "../classNames/ProfileSettingsClasses";
import ProfileSettingsDatas from "../data/ProfileSettingsData";
import DatasProfileSettings from "./datasProfileSettings";
import { useSelector } from "react-redux";

const ProfileSettings = () => {
  const { sectionProfileSettings, classTwo, classThree, classFour } =
    ProfileSettingsClasses;
  const { classFive, classSix } = ProfileSettingsClasses;
  const { stars, showUser } = ProfileSettingsDatas;
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <section className={sectionProfileSettings}>
      <div className="container">
        <div className={classTwo}>
          <div className={style.prof}>
            <img src={AvatarImg} alt="profile" />
            <p className={classThree}>{showUser(userInfo)}</p>
            <p className={classFour}>Level 20</p>
            <div className={classFive}>
              {stars.map((star, i) => (
                <i key={i} className={star}></i>
              ))}
            </div>
            <p className={classSix}>550 Rating</p>
          </div>
          <DatasProfileSettings />
        </div>
      </div>
    </section>
  );
};

export default ProfileSettings;
