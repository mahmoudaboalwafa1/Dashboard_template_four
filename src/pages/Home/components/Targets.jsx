import React from "react";
import style from "../../../css/pages/home.module.css";
import { classesTargets } from "./classNames/HomeClassNames";

const Targets = () => {
  const {
    sectionClass,
    textSmCenter,
    textGray,
    classFour,
    classFive,
    classSix,
    classSeven,
  } = classesTargets;
  return (
    <section className={sectionClass}>
      <div className="container">
        <h1 className={textSmCenter}>Yearly Targets</h1>
        <p className={textGray}>Targets Of The Year</p>
        <div className={`${style.money} ${classFour}`}>
          <div className={`${style.mon} d-flex`}>
            <i className={classFive}></i>
            <div>
              <p className="text-gray">Money</p>
              <h1>$20.000</h1>
            </div>
          </div>
          <div className={style.blue}>
            <span>80%</span>
          </div>
        </div>
        <div className={`${style.projects} ${classFour}`}>
          <i className={classSix}></i>
          <div className={style.pro}>
            <p className="text-gray">Projects</p>
            <h1>24</h1>
          </div>
        </div>
        <div className={style.orange}>
          <span>55%</span>
        </div>
        <div className={`${style.team} ${classFour}`}>
          <i className={classSeven}></i>
          <div className={style.tem}>
            <p className="text-gray">Team</p>
            <h1>12</h1>
          </div>
        </div>
        <div className={style.green}>
          <span>75%</span>
        </div>
      </div>
    </section>
  );
};

export default Targets;
