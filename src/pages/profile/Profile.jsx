import React from "react";
import Collection from "../../components/collection";
import { ProfileSettings, Skills, Activites } from "../index";
import style from "../../css/pages/profile.module.css";

const Profile = () => {
  return (
    <Collection MainTitle="Profile">
      <ProfileSettings />
      <div className={`${style.container_profile} d-flex`}>
        <Skills />
        <Activites />
      </div>
    </Collection>
  );
};

export default Profile;
