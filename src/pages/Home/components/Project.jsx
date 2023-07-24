import React from "react";
import style from "../../../css/pages/home.module.css";
import { ProjectImg } from "../../../images";
import { classesProject } from "./classNames/HomeClassNames";
import ProjectsData from "../data/ProjectsData";

const Project = () => {
  const { classOne, classTwo, classThree } = classesProject;
  return (
    <section className={`${style.project} ${classOne}`}>
      <div className="container">
        <h1 className={`${style.center} fs-25`}>Last Project Progress</h1>
        <div className={style.proges}>
          <div>
            {ProjectsData.map((text, index) => {
              return (
                <div
                  key={index}
                  className={`${style.progec} ${
                    index === 4 ? classThree : classTwo
                  }`}
                >
                  <div></div>
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
          <img src={ProjectImg} alt="project" />
        </div>
      </div>
    </section>
  );
};

export default Project;
