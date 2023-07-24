import {
  ADD_TASK,
  CHANGE_DATA_USER,
  CHANGE_MODE,
  DEl_TASK,
  HIDE_OR_SHOW_WIDGETS,
  SELECT_TASK,
  SET_SOCIAL_INFO,
  UPDATE_PROFILE_SETTING,
} from "./actionType";

// Action Medthod For Tasks
const DelTask = (taskDel) => {
  return { type: DEl_TASK, index: taskDel };
};

const SelectTask = (taskSelection, index) => {
  return {
    type: SELECT_TASK,
    line: taskSelection,
    index: index,
  };
};

const AddTask = (title, text) => {
  return {
    type: ADD_TASK,
    title: title,
    text: text,
  };
};

// Action Method For DarkMode / LightMode
const ChangeModeDispatch = (mode) => {
  return { type: CHANGE_MODE, modeNow: mode };
};

// Action Method To Hide Or Show Data Profile
const UpdProfileSettings = (checked, index) => {
  return {
    type: UPDATE_PROFILE_SETTING,
    check: checked,
    id: index,
  };
};

// Action Method For Data User
const ChangeDataUser = (fName, lName, email) => {
  return {
    type: CHANGE_DATA_USER,
    userInfo: { fName, lName, email },
  };
};

// Action Method For UserName Socials
const setSocialInfo = (twitter, facebook, youtube, linkedin) => {
  return {
    type: SET_SOCIAL_INFO,
    socialInfo: { twitter, facebook, youtube, linkedin },
  };
};

// Action Method For Hide Or Show Widgets
const HideShowWidget = (check, index) => {
  return {
    type: HIDE_OR_SHOW_WIDGETS,
    check,
    index,
  };
};

export {
  DelTask,
  SelectTask,
  ChangeModeDispatch,
  AddTask,
  UpdProfileSettings,
  ChangeDataUser,
  setSocialInfo,
  HideShowWidget,
};
