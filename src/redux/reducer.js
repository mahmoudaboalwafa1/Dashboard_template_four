import initialState from "./states/States";
import {
  ADD_TASK,
  CHANGE_DATA_USER,
  CHANGE_MODE,
  DEl_TASK,
  HIDE_OR_SHOW_WIDGETS,
  SELECT_TASK,
  SEND_NOTIFICATIONS,
  SET_DATA_GITHUB,
  SET_PROJECTS_DATA,
  SET_SOCIAL_INFO,
  SET_USER_AUTH,
  UPDATE_PROFILE_SETTING,
} from "./actionType";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEl_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, i) =>
          i === action.index ? "" : state.tasks
        ),
      };
    case SELECT_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, i) =>
          i === action.index ? (task.line = action.line) : state.tasks
        ),
      };
    case CHANGE_MODE:
      return { ...state, modeNow: action.modeNow };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.tasks],
      };
    case UPDATE_PROFILE_SETTING:
      return {
        ...state,
        profileSettingsData: [
          ...state.profileSettingsData,
          state.profileSettingsData.filter(
            (profile, index) =>
              index === action.check.id &&
              (profile.checked = action.check.check)
          ),
        ].splice(0, 4),
      };
    case CHANGE_DATA_USER:
      return {
        ...state,
        userInfo: [
          {
            firstName: action.userInfo.fName,
            lastName: action.userInfo.lName,
            email: action.userInfo.email,
          },
        ],
      };
    case SET_SOCIAL_INFO:
      return {
        ...state,
        socialInfo: [
          { twitter: action.socialInfo.twitter },
          { facebook: action.socialInfo.facebook },
          { linkedin: action.socialInfo.linkedin },
          { youtube: action.socialInfo.youtube },
        ],
      };
    case HIDE_OR_SHOW_WIDGETS:
      return {
        ...state,
        WidgetsData: [
          state.WidgetsData.filter(
            (widget, i) => i === action.index && (widget.checked = action.check)
          ),
          ...state.WidgetsData,
        ].splice(1),
      };
    case SEND_NOTIFICATIONS:
      return {
        ...state,
      };
    case SET_USER_AUTH:
      return { ...state, user: (state.UserAuth.user = action.user) };
    case SET_PROJECTS_DATA:
      return {
        ...state,
        ProjectsData: (state.ProjectsData = action.projects),
      };
  }

  return state;
};

export default mainReducer;
