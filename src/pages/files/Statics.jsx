import React, { Fragment } from "react";
import StatisticsData from "./data/StatisticsData";
import StaticClasses from "./classNames/StaticsClasses";

const Static = () => {
  const { staticsParent, titleStatics, staticBox, iconFile } = StaticClasses;
  const { textGray, btnShape, arrowUp } = StaticClasses;
  return (
    <div className={staticsParent}>
      <div className="container">
        <h3 className={titleStatics}>Files Statistics</h3>

        {StatisticsData.map((stat, index) => {
          const { fileImg, text, color } = stat;
          return (
            <Fragment key={index}>
              <div className={staticBox}>
                <i className={iconFile(fileImg, color)}></i>
                <ul className="ps-20">
                  <li>{text}</li>
                  <li className={textGray}>130</li>
                </ul>
                <span className={textGray}>6.5GB</span>
              </div>
            </Fragment>
          );
        })}
        <a className={btnShape} href="#">
          {" "}
          <i className={arrowUp}></i>
          <p className="ps-10">Upload</p>
        </a>
      </div>
    </div>
  );
};

export default Static;
