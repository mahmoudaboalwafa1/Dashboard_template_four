import style from "../../../css/pages/plans.module.css";

const PlansClasses = {
  PlansContainer: `${style.detail_plan} d-flex space-between pb-10 pt-20`,
  classPremissions: (premission) => `${premission} fa-solid fa-fw`,
  classHelp: `${style.help} fa-solid fa-circle-info`,
  textGray: " text-gray pt-20",
  bgPlan: (color) => {
    return `${style.plen} ${
      color == "orange"
        ? style.orange
        : color == "blue"
        ? style.blue
        : style.green
    } mb-20`;
  },
  btnBg: (btnColor, current, textGray) => {
    return `${style.join}${textGray} ${current && style.current} ${
      btnColor == "joino" ? style.joino : btnColor == "joing" ? style.joing : ""
    }`;
  },
  planDarkMode: (bodyMode) => {
    return bodyMode.includes("DarkMode") ? style.plan_dark : style.plan;
  },
};

export default PlansClasses;
