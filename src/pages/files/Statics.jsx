import React, { Fragment } from "react";
import StatisticsData from "./data/StatisticsData";
import style from "../../css/pages/files.module.css";
import StaticClasses from "./classNames/StaticsClasses";

const Static = () => {
  const { classOne, classTwo, classThree, classFour } = StaticClasses;
  const { classFive, classSix, classSeven } = StaticClasses;
  return (
    <div className={`${style.statics} ${classOne}`}>
      <div className="container">
        <h3 className={classTwo}>Files Statistics</h3>

        {StatisticsData.map((stat, index) => {
          const { fileImg, text } = stat;
          return (
            <Fragment key={index}>
              <div className={`${style.stat} ${classThree}`}>
                <i className={`${fileImg} ${classFour}`}></i>
                <ul className="ps-20">
                  <li>{text}</li>
                  <li className={classFive}>130</li>
                </ul>
                <span className={classFive}>6.5GB</span>
              </div>
            </Fragment>
          );
        })}
        <a className={classSix} href="#">
          {" "}
          <i className={classSeven}></i>
          <p className="ps-10">Upload</p>
        </a>
      </div>
    </div>
  );
};

export default Static;
