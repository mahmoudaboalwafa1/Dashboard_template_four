import style from "../../../css/pages/profile.module.css";

const ProfileSettingsClasses = {
  sectionProfileSettings: `${style.profile} bg-light pt-20 border-r-10`,
  classTwo: `${style.infor} d-flex`,
  classThree: `${style.textt} pt-10 ps-10`,
  classFour: "text-gray pt-10",
  classFive: `${style.stars} p-relative pb-20`,
  classSix: `${style.rate} text-gray`,
  classSeven: (bodyMode) => {
    return bodyMode.includes("darkMode") ? style.details : style.details_dark;
  },
  classEight: (checked) => {
    return `${style.full} ${checked && style.hidden_info}`;
  },
  classNine: "pt-20 text-gray fs-15",
  classTen: (checked) => {
    return `${style.gendar} ${checked && style.hidden_info}`;
  },
  classEleven: (checked) => {
    return `${style.country} ${checked && style.hidden_info}`;
  },
};

export default ProfileSettingsClasses;
