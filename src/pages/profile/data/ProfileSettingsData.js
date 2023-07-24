import style from "../../../css/pages/profile.module.css";

const ProfileSettingsDatas = {
  stars: [
    "fa-solid fa-star",
    "fa-solid fa-star",
    "fa-solid fa-star",
    "fa-solid fa-star",
    "fa-solid fa-star",
  ],
  showUser: (userInfo) => {
    return userInfo[0].firstName
      ? `${userInfo[0].firstName} ${userInfo[0].lastName}`
      : "UserName";
  },
  oneTitle: (userInfo, textOne, id) => {
    return userInfo[0].firstName.length == ""
      ? textOne
      : id == 0
      ? `${userInfo[0].firstName} ${userInfo[0].lastName}`
      : id === 1
      ? userInfo[0].email
      : textOne;
  },
  inputProps: {
    type: "checkbox",
    className: `${style.toggle} mt-20`,
  },
};

export default ProfileSettingsDatas;
