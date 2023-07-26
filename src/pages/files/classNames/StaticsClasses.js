import style from "../../../css/pages/files.module.css";

const StaticClasses = {
  staticsParent: `${style.statics} bg-light border-r-10`,
  titleStatics: "pt-20 fs-25 text-sm-center",
  staticBox: `${style.stat} d-flex align-center pt-20`,
  iconFile: (fileImg, color) => {
    return `${fileImg} fa-regular fa-lg center-flex ${color}`;
  },
  textGray: "text-gray",
  btnShape: "btnshape bg-info text-white",
  arrowUp: "fa-solid fa-angles-up up",
};

export default StaticClasses;
