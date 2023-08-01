import React from "react";
import style from "../../../css/pages/home.module.css";
import TargetsClassess from "./classNames/TargetsClasses";

const Targets = () => {
  const { sectionTargets, titleTagrets, textGray } = TargetsClassess;
  const { containerProject, dollarIcon, codeIcon, userIcon } = TargetsClassess;
  return (
    <section className={sectionTargets}>
      <div className="container">
        <h1 className={titleTagrets}>Yearly Targets</h1>
        <p className={textGray}>Targets Of The Year</p>
        <div className={`${style.money} ${containerProject}`}>
          <div className={`${style.mon} d-flex`}>
            <i className={dollarIcon}></i>
            <div>
              <p className="text-gray">Money</p>
              <h1>$20.000</h1>
            </div>
          </div>
          <div className={style.blue}>
            <span>80%</span>
          </div>
        </div>
        <div className={`${style.projects} ${containerProject}`}>
          <i className={codeIcon}></i>
          <div className={style.pro}>
            <p className="text-gray">Projects</p>
            <h1>24</h1>
          </div>
        </div>
        <div className={style.orange}>
          <span>55%</span>
        </div>
        <div className={`${style.team} ${containerProject}`}>
          <i className={userIcon}></i>
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
