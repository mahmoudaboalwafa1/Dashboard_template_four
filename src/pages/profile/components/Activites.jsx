import React from "react";
import style from "../../../css/pages/profile.module.css";
import ActivitesData from "../data/ActivitesData";
import ActivitesClasses from "../classNames/ActivitesClasses";

const Activities = () => {
  const { sectionClass, titleActi, textActi, activBox } = ActivitesClasses;
  return (
    <section className={sectionClass}>
      <div className="container">
        <h1 className={titleActi}>Latest Activities</h1>
        <p className={textActi}>Latest Activities Done By The User</p>
        {ActivitesData.map((active, index) => {
          const { img, alt, title, text, time, day } = active;
          return (
            <div key={index} className={activBox}>
              <img src={img} alt={alt} />
              <ul className="ps-20">
                <li>{title}</li>
                <li className="text-gray">{text}</li>
              </ul>
              <ul className={style.time}>
                <li className="pb-10">{time}</li>
                <li className="text-gray">{day}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Activities;
