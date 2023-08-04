import React from "react";
import Collection from "../../components/Collection";
import ProjectsClasses from "./classNames/ProjectsClasses";
import RequireAuth from "../Regiester/RequireAuth";
import { useSelector } from "react-redux";
import styleProjects from "../../css/pages/projects.module.css";
import SignInGithub from "../Regiester/SignInGithub";

const Projects = () => {
  const { containerProjects, spaceBetween, padding } = ProjectsClasses;
  const { textGray, classImages, dflex } = ProjectsClasses;
  const projectsData = useSelector((state) => state.ProjectsData);
  return (
    <RequireAuth>
      <Collection MainTitle="Projects">
        {projectsData.length > 0 ? (
          projectsData.map((project) => {
            const {
              id,
              description,
              homepage,
              name,
              language,
              clone_url,
              created_at,
            } = project;
            return (
              <div className={containerProjects} key={id}>
                <div className="container">
                  <div className={spaceBetween}>
                    <div>
                      <h1 className={padding}>{name}</h1>
                      <p className={textGray.slice(0, -6)}>{description}</p>
                    </div>
                    <p className={textGray}>{created_at}</p>
                  </div>
                  <div className={classImages}></div>
                  <ul className={`${dflex} ${styleProjects.containerBtns}`}>
                    <div>
                      <a href={clone_url} target="_blank" className="bg-info">
                        Visit a repo
                      </a>
                      <a href={homepage} target="_blank" className="bg-info">
                        Visit a website
                      </a>
                    </div>
                    <li>{language}</li>
                  </ul>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <div>
              <p className="pb-10">
                you must Sign In with github to show your projects
              </p>
              <SignInGithub />
            </div>
          </div>
        )}
      </Collection>
    </RequireAuth>
  );
};

export default Projects;
