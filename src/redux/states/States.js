import profileSettingsData from "./ProfileSettings";
import tasks from "./Tasks";
import userInfo from "./userInfo";
import SocialInfo from "./socialInfo";
import WidgetsData from "./widgetsData";
import Notifications from "./Notifications";

const initialState = {
  profileSettingsData,
  tasks,
  modeNow: "LightMode",
  index: 0,
  userInfo,
  SocialInfo,
  WidgetsData,
  Notifications,
};

export default initialState;
