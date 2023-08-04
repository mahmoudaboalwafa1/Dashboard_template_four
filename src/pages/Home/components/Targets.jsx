import React from "react";
import styleTarget from "../../../css/pages/home.module.css";
import TargetsClassess from "./classNames/TargetsClasses";

const Targets = () => {
  const { sectionTargets, titleTagrets, textGray } = TargetsClassess;
  const { containerProject, dollarIcon, codeIcon, userIcon } = TargetsClassess;
  return (
    <section className={sectionTargets}>
      <div className="container">
        <h4 className={titleTagrets}>Yearly Targets</h4>
        <p className={textGray}>Targets Of The Year</p>
        <div className={`${styleTarget.money} ${containerProject}`}>
          <i className={dollarIcon}></i>
          <div className={styleTarget.mon}>
            <p className="text-gray">Money</p>
            <h4>$20.000</h4>
          </div>
        </div>
        <div className={styleTarget.blue}>
          <span>80%</span>
        </div>
        <div className={`${styleTarget.projects} ${containerProject}`}>
          <i className={codeIcon}></i>
          <div className={styleTarget.pro}>
            <p className="text-gray">Projects</p>
            <h4>24</h4>
          </div>
        </div>
        <div className={styleTarget.orange}>
          <span>55%</span>
        </div>
        <div className={`${styleTarget.team} ${containerProject}`}>
          <i className={userIcon}></i>
          <div className={styleTarget.tem}>
            <p className="text-gray">Team</p>
            <h4>12</h4>
          </div>
        </div>
        <div className={styleTarget.green}>
          <span>75%</span>
        </div>
      </div>
    </section>
  );
};

export default Targets;
