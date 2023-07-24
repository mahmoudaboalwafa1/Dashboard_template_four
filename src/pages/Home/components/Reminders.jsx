import React from "react";
import style from "../../../css/pages/home.module.css";
import { classesReminders } from "./classNames/HomeClassNames";
import RemindersData from "../data/RemindersData";

const Reminders = () => {
  const { classOne, classFour } = classesReminders;
  return (
    <section className={`${style.reminders} ${classOne}`}>
      <div className="container">
        <h1 className={`${style.center} fs-25`}>Reminders</h1>
        {RemindersData.map((reminder, index) => {
          const { title, date, OneClass } = reminder;
          return (
            <div key={index} className={`${style.rem} ${OneClass}`}>
              <div
                className={`${
                  index == 0
                    ? style.circlerem
                    : index == 1
                    ? style.circleremg
                    : index == 2
                    ? style.circleremo
                    : style.circleremd
                } ${classFour}`}
              ></div>
              <div className={style.textrem}>
                <h1>{title}</h1>
                <p className="text-gray">{date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reminders;
