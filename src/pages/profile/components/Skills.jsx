import React from "react";
import SkillsData from "../data/SkillsData";
import { useSelector } from "react-redux";
import SkillsClasses from "../classNames/SkillsClasses";

const Skills = () => {
  const bodyMode = useSelector((state) => state.modeNow);
  const { sectionSkills, titleSkills, textSkills } = SkillsClasses;
  const { containerSkills, skillsDark } = SkillsClasses;
  return (
    <section className={sectionSkills}>
      <div className="container">
        <h1 className={titleSkills}>My Skills</h1>
        <p className={textSkills}>Complete Skills List</p>
        <div className={containerSkills}>
          {SkillsData.map((skill, index) => {
            return (
              <ul className="d-flex" key={index}>
                {skill.map((li, index) => {
                  return (
                    <li className={skillsDark(bodyMode)} key={index}>
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
