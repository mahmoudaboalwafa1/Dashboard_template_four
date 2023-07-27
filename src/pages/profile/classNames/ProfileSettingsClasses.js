import style from "../../../css/pages/profile.module.css";

const ProfileSettingsClasses = {
  sectionProfileSettings: `${style.profile} bg-light pt-20 border-r-10`,
  infoContainer: `${style.infor} d-flex`,
  textUser: `${style.textt} pt-10 ps-10`,
  textGray: "text-gray pt-10",
  containerStars: `${style.stars} p-relative pb-20`,
  rateBox: `${style.rate} text-gray`,
  changeToDark: (bodyMode) => {
    return bodyMode.includes("darkMode") ? style.details : style.details_dark;
  },
  changeToCheck: (checked) => {
    return `${style.full} ${checked && style.hidden_info}`;
  },
  textGrayTwo: "pt-20 text-gray fs-15",
  changeToCheckTwo: (checked) => {
    return `${style.gendar} ${checked && style.hidden_info}`;
  },
  changeToCheckThree: (checked) => {
    return `${style.country} ${checked && style.hidden_info}`;
  },
};

export default ProfileSettingsClasses;
