import style from "../../../css/pages/profile.module.css";

const ProfileSettingsDatas = {
  stars: [
    "fa-solid fa-star",
    "fa-solid fa-star",
    "fa-solid fa-star",
    "fa-solid fa-star",
    "fa-solid fa-star",
  ],
  showUser: (userAuth) => {
    return userAuth ? userAuth.displayName : "UserName";
  },
  oneTitle: (userAuth, textOne, id) => {
    return id != 0 ? textOne : userAuth ? userAuth.displayName : textOne;
  },
  inputProps: {
    type: "checkbox",
    className: `${style.toggle} mt-20`,
  },
};

export default ProfileSettingsDatas;
