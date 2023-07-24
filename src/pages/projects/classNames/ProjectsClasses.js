import style from "../../../css/pages/projects.module.css";

const ProjectsClasses = {
  containerProjects: `${style.project} bg-light border-r-10`,
  spaceBetween: `${style.dashs} d-flex space-between pb-20`,
  padding: "fs-15 pt-20 pb-10",
  textGray: `${style.texts} text-gray pt-10`,
  classImages: `${style.images} d-flex pt-20 p-relative`,
  dflex: "d-flex pb-20 p-relative",
  classProg: `${style.prog} d-flex space-between pb-20`,
  Colorprog: (progColor) => {
    return `${style.progress} ${
      progColor === "red"
        ? style.red
        : progColor === "green"
        ? style.green
        : progColor === "green2"
        ? style.green2
        : progColor === "blue"
        ? style.blue
        : progColor == "red2"
        ? style.red2
        : progColor === "green3"
        ? style.green3
        : style.green4
    } p-relative mt-20`;
  },
  dollar: `${style.dollar} pt-20 p-relative text-gray`,
};

export default ProjectsClasses;
