import React from "react";
import Collection from "../../components/collection";
import CoursesData from "./data/CoursesData";
import style from "../../css/pages/courses.module.css";
import CoursesClasses from "./classNames/CoursesClasses";

const Courses = () => {
  const { classOne, classTwo, classThree } = CoursesClasses;
  const { classFour, classFive, classSix, classSeven } = CoursesClasses;
  return (
    <Collection MainTitle="Courses">
      <div className={`${style.courses} pt-10`}>
        {CoursesData.map((course, index) => {
          const { id, CourseImg, TeamImg } = course;
          const { text, title, people, price } = course;
          return (
            <div key={id} className={`${style.course} bg-light`}>
              <img className="p-relative" src={CourseImg} alt={id} />
              <img className={style.team} src={TeamImg} alt={`team${index}`} />
              <div className="container">
                <div className={style.textcourse}>
                  <h1 className={classOne}>{title}</h1>
                  <p className={classTwo}>{text}</p>
                </div>
                <input type="checkbox" id={id} />
                <label htmlFor={id}>Course Info</label>
                <div className={`${style.icons} ${classThree}`}>
                  <div className={classFour}>
                    <i className={classFive}>{people}</i>
                    <p className={`${style.peo} ${classSix}`}></p>
                  </div>
                  <div className={classFour}>
                    <i className={classSeven}></i>
                    <p className={`${style.peo} ${classSix}`}>{price}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <></>
    </Collection>
  );
};

export default Courses;
