import style from "../../../css/pages/plans.module.css";

const PlansClasses = {
  classOne: "d-flex space-between pb-10 pt-20",
  classTwo: " fa-solid  fa-fw",
  classThree: "fa-solid fa-circle-info",
  classFour: " text-gray pt-20",
  classFive: (color) => {
    return `${style.plen} ${
      color == "orange"
        ? style.orange
        : color == "blue"
        ? style.blue
        : style.green
    } mb-20`;
  },
  classSix: (btnColor, current, classFour) => {
    return `${style.join}${classFour} ${current && style.current} ${
      btnColor == "joino" ? style.joino : btnColor == "joing" ? style.joing : ""
    }`;
  },
  classSeven: (bodyMode) => {
    return bodyMode.includes("DarkMode") ? style.plan_dark : style.plan;
  },
};

export default PlansClasses;
