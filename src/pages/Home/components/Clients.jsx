import React, { useContext } from "react";
import { ClientsHead } from "../data/ClientsData";
import { useSelector } from "react-redux";
import ClientsClasses from "./classNames/ClientsClasses";
import { DashboardContext } from "../../../context/DashboardContext";

const Clients = () => {
  const bodyMode = useSelector((state) => state.modeNow);
  const projectsData = useSelector((state) => state.ProjectsData);
  const { sectionClass, mainTitle, thMode, tableMode } = ClientsClasses;
  const { commits } = useContext(DashboardContext);
  const SizeInBytes = (size) => {
    const sizeBytes = (size / 1024).toFixed(2);
    return sizeBytes + "MB";
  };

  return (
    <section className={sectionClass}>
      <div className="container">
        <h1 className={mainTitle}>Projects</h1>
      </div>
      <table>
        <thead>
          <tr>
            {ClientsHead.map((client) => (
              <th key={client} className={thMode(bodyMode)}>
                {client}
              </th>
            ))}
          </tr>
        </thead>
      </table>
      {projectsData.length > 0
        ? projectsData.map((project, index) => {
            const { id, default_branch, name, size, visibility, created_at } =
              project;
            const dateCreated = new Date(created_at).toLocaleDateString();
            return (
              <table className={tableMode(bodyMode)} key={id}>
                <tbody>
                  <tr>
                    <td>{name}</td>
                    <td style={{ direction: "rtl" }}>{dateCreated}</td>
                    {commits != undefined &&
                      commits.map(
                        (commit, key) =>
                          key === index && <td key={key}>{commit.length}</td>
                      )}
                    <td>{visibility}</td>
                    <td>{default_branch}</td>
                    <td>{SizeInBytes(size)}</td>
                  </tr>
                </tbody>
              </table>
            );
          })
        : ""}
    </section>
  );
};

export default Clients;
