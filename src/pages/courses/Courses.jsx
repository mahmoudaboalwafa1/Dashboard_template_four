import React from "react";
import Collection from "../../components/Collection";
import CoursesData from "./data/CoursesData";
import style from "../../css/pages/courses.module.css";
import CoursesClasses from "./classNames/CoursesClasses";
import RequireAuth from "../Regiester/RequireAuth";

const Courses = () => {
  const { courseContainer, courseParent } = CoursesClasses;
  const { courseTitle, courseText, courseIcons } = CoursesClasses;
  const { alignCenter, iconUser, textGray, iconDollar } = CoursesClasses;
  return (
    <RequireAuth>
      <Collection MainTitle="Courses">
        <div className={courseContainer}>
          {CoursesData.map((course, index) => {
            const { id, CourseImg, TeamImg } = course;
            const { text, title, people, price } = course;
            return (
              <div key={id} className={courseParent}>
                <img className="p-relative" src={CourseImg} alt={id} />
                <img
                  className={style.team}
                  src={TeamImg}
                  alt={`team${index}`}
                />
                <div className="container">
                  <div className={style.textcourse}>
                    <h4 className={courseTitle}>{title}</h4>
                    <p className={courseText}>{text}</p>
                  </div>
                  <input type="checkbox" id={id} />
                  <label htmlFor={id}>Course Info</label>
                  <div className={courseIcons}>
                    <div className={alignCenter}>
                      <i className={iconUser}>
                        <span className="ps-10">{people}</span>
                      </i>
                      <p className={textGray}></p>
                    </div>
                    <div className={alignCenter}>
                      <i className={iconDollar}></i>
                      <p className={textGray}>{price}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <></>
      </Collection>
    </RequireAuth>
  );
};

export default Courses;
