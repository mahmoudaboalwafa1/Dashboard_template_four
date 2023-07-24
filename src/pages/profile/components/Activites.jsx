import React from "react";
import style from "../../../css/pages/profile.module.css";
import ActivitesData from "../data/ActivitesData";

const Activities = () => {
  return (
    <section className={`${style.activities} bg-light border-r-10 mb-20`}>
      <div className="container">
        <h1 className="fs-25 pt-20 pb-10 text-sm-center">Latest Activities</h1>
        <p className="text-gray text-sm-center">
          Latest Activities Done By The User
        </p>
        {ActivitesData.map((active, index) => {
          const { img, alt, title, text, time, day } = active;
          return (
            <div
              key={index}
              className={`${style.active} pt-20 d-flex align-center`}
            >
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
