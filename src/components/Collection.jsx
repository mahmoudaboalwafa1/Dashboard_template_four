import React, { useContext } from "react";
import Nav from "./Nav";
import Aside from "./Aside";
import CollectionClasses from "./classNames/CollectionClasses";
import { useSelector } from "react-redux";
import { FriendsContext } from "../context/FriendsContext";
import { FilesContext } from "../context/FilesContext";

const Collection = ({ clients, MainTitle, children }) => {
  const userAuth = useSelector((state) => state.UserAuth.user);
  const projectsData = useSelector((state) => state.ProjectsData);
  const FilesData = useSelector((state) => state.FilesData);
  const { dataUsers, userNow, updatedUserData } = useContext(FriendsContext);
  const { filesDb, index } = useContext(FilesContext);

  console.log("collection");

  return (
    <main>
      <Aside />
      <section
        className={`allsections ${!userAuth && "h-100"} ${
          !projectsData.length > 0 && MainTitle?.includes("Projects") && "h-100"
        }`}
      >
        <Nav />
        <div>
          <h1 className="dash">{MainTitle}</h1>
          <div
            className={CollectionClasses.mainTitle(
              MainTitle,
              FilesData,
              dataUsers,
              userNow,
              updatedUserData,
              filesDb,
              index
            )}
            style={{
              display: MainTitle.includes(filesDb[index]?.name) && "block",
            }}
          >
            {children}
          </div>
          {clients}
        </div>
      </section>
    </main>
  );
};

export default Collection;
