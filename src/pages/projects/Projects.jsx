import React from "react";
import Collection from "../../components/collection";
import ProjectsData from "./data/Projects";
import ProjectsClasses from "./classNames/ProjectsClasses";

const Projects = () => {
  const { containerProjects, spaceBetween, padding } = ProjectsClasses;
  const { textGray, classImages, dflex, classProg } = ProjectsClasses;
  const { Colorprog, dollar } = ProjectsClasses;
  return (
    <Collection MainTitle="Projects">
      {ProjectsData.map((ele, index) => {
        const { title, text, date, imgs, list, progColor, price } = ele;
        return (
          <div className={containerProjects} key={index}>
            <div className="container">
              <div className={spaceBetween}>
                <div>
                  <h1 className={padding}>{title}</h1>
                  <p className={textGray.slice(0, -6)}>{text}</p>
                </div>
                <p className={textGray}>{date}</p>
              </div>
              <div className={classImages}>
                {imgs.map((ele, index) => (
                  <img src={ele} alt={`team-${index}`} key={index} />
                ))}
              </div>
              <ul className={dflex}>
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className={classProg}>
                <div className={Colorprog(progColor)}></div>
                <p className={dollar}>{price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Collection>
  );
};

export default Projects;
