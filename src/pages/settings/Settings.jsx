import React from "react";
import {
  Backup,
  Control,
  Genral,
  Security,
  SocialSettings,
  Widgets,
} from "../index";
import Collection from "../../components/collection";

const Settings = () => {
  return (
    <Collection MainTitle="Settings">
      <Control />
      <Genral />
      <Security />
      <SocialSettings />
      <Widgets />
      <Backup />
    </Collection>
  );
};

export default Settings;
