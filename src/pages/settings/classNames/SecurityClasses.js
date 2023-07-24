import style from "../../../css/pages/settings.module.css";

const SecurityClasses = {
  mainClass: `${style.security} bg-light border-r-10 pt-10`,
  textCenter: "fs-25 text-sm-center",
  spaceBetween: "d-flex space-between p-relative pb-20",
  textInfo: `${style.change} bg-info`,
  textGray: "fs-15 text-gray pt-10",
  devicesDark: (bodyMode) => {
    return bodyMode.includes("LightMode") ? style.devices : style.devices_dark;
  },
};

export default SecurityClasses;
