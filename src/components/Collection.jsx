import React from "react";
import Nav from "./Nav";
import Aside from "./Aside";
import CollectionClasses from "./classNames/CollectionClasses";

const Collection = ({ clients, MainTitle, children }) => {
  return (
    <main>
      <Aside />
      <section className="allsections">
        <Nav />
        <div>
          <h1 className="dash">{MainTitle}</h1>
          <div className={CollectionClasses.mainTitle(MainTitle)}>
            {...children}
          </div>
          {clients}
        </div>
      </section>
    </main>
  );
};

export default Collection;
