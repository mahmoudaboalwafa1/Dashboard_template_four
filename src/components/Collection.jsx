import React from "react";
import Nav from "./Nav";
import Aside from "./Aside";
import style from "../css/pages/home.module.css";
import styleFile from "../css/pages/files.module.css";

const Collection = ({ clients, MainTitle, children }) => {
  return (
    <main>
      <Aside />
      <section className="allsections">
        <Nav />
        <div>
          <h1 className="dash">{MainTitle}</h1>
          <div
            className={
              MainTitle == "Courses"
                ? ""
                : MainTitle === "Friends"
                ? ""
                : MainTitle === "Profile"
                ? ""
                : MainTitle === "Plans"
                ? ""
                : MainTitle === "Files"
                ? `d-flex ${styleFile.files}`
                : style.all
            }
          >
            {...children}
          </div>
          {clients}
        </div>
      </section>
    </main>
  );
};

export default Collection;
