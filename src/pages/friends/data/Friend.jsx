import React, { useContext } from "react";
import Collection from "../../../components/Collection";
import { FriendsContext } from "../../../context/FriendsContext";
import RequireAuth from "../../Regiester/RequireAuth";
import ProfileSettings from "../../profile/components/ProfileSettings";
import Skills from "../../profile/components/Skills";
import { Activites } from "../..";
import style from "../../../css/pages/friends.module.css";

const Friend = () => {
  const { dataUsers, userNow } = useContext(FriendsContext);
  return (
    <RequireAuth>
      <Collection MainTitle={dataUsers[userNow]?.name}>
        <ProfileSettings
          friend={true}
          dataUsers={dataUsers}
          userNow={userNow}
        />
        <div className={`${style.container_profile} d-flex`}>
          <Skills friend={true} dataUsers={dataUsers} userNow={userNow} />
          <Activites />
        </div>
      </Collection>
    </RequireAuth>
  );
};

export default Friend;
