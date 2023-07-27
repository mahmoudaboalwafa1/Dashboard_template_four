import React from "react";
import style from "../../../css/pages/home.module.css";
import TargtesClasses from "./classNames/TargetsClasses";

const Targets = () => {
  const {
    sectionTargets,
    textSmCenter,
    textGray,
    classFour,
    classFive,
    classSix,
    classSeven,
  } = TargtesClasses;
  return (
    <section className={sectionTargets}>
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
        <div className={containerProjects}>
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
