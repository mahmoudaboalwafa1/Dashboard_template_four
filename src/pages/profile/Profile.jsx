import React from "react";
import RequireAuth from "../Regiester/RequireAuth";
import Collection from "../../components/Collection";
import { ProfileSettings, Skills, Activites } from "../index";
import style from "../../css/pages/profile.module.css";

const Profile = () => {
  return (
    <RequireAuth>
      <Collection MainTitle="Profile">
        <ProfileSettings />
        <div className={`${style.container_profile} d-flex`}>
          <Skills />
          <Activites />
        </div>
      </Collection>
    </RequireAuth>
  );
};

export default Profile;
