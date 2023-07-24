import React from "react";
import style from "../../../css/pages/home.module.css";
import { classesSearch } from "./classNames/HomeClassNames";
import SearchData from "../data/SearchData";

const Search = () => {
  const { classOne, classTwo, classThree } = classesSearch;
  return (
    <section className={`${style.search} ${classOne}`}>
      <div className="container">
        <h1 className={`${style.center} ${classTwo}`}>Top Search Items</h1>

        {SearchData.map((search, index) => {
          const { liOne, liTwo, className } = search;
          return (
            <ul key={index} className={`${style.searchs} ${classThree}`}>
              <li className={className}>{liOne}</li>
              <li className={className}>{liTwo}</li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default Search;
