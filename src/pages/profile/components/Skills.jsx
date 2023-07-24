import React from "react";
import style from "../../../css/pages/profile.module.css";
import SkillsData from "../data/SkillsData";
import { useSelector } from "react-redux";

const Skills = () => {
  const bodyMode = useSelector((state) => state.modeNow);
  return (
    <section className={`${style.skills} bg-light border-r-10 ms-20 mb-20`}>
      <div className="container">
        <h1 className="fs-25 pt-20 pb-10 text-sm-center">My Skills</h1>
        <p className="text-gray pb-10 text-sm-center">Complete Skills List</p>
        <div className={`${style.container_skills} pt-20`}>
          {SkillsData.map((skill, index) => {
            return (
              <ul className="d-flex" key={index}>
                {skill.map((li, index) => {
                  return (
                    <li
                      className={
                        bodyMode.includes("LightMode")
                          ? style.skills_item
                          : style.skills_item_dark
                      }
                      key={index}
                    >
                      {li}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
