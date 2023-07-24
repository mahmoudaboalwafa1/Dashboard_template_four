import style from "../../../../css/pages/home.module.css";

const DashboardClasses = {
  classOne:
    "pt-10 ps-20 border-r-tl border-r-tr d-flex space-between p.relative",
  dashMode: (bodyMode, classOne) => {
    return `${
      bodyMode.includes("LightMode") ? style.dash : style.dash_dark
    } ${classOne}`;
  },
  padding: "pt-10 pb-10 pe-20",
  border: `p-relative bg-light border-r-br border-r-bl`,
  alignCenter: `${style.detaildash} d-flex align-center`,
  btnShape: "bg-info text-white btnshape",
  detailText: "detailtext pt-20",
};

export default DashboardClasses;
