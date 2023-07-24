import React from "react";
import style from "../../../css/pages/home.module.css";
import { classesNews } from "./classNames/HomeClassNames";
import NewsData from "../data/NewsData";
import { useSelector } from "react-redux";

const News = () => {
  const { classOne, classTwo } = classesNews;
  const bodyMode = useSelector((state) => state.modeNow);
  return (
    <section className={`${style.news} ${classOne} `}>
      <h1 className="fs-25 center">Latest News</h1>
      {NewsData.map((news, index) => {
        const { img, alt, title, text, ago } = news;
        return (
          <div key={index} className={`${style.newall} ${classTwo}`}>
            <img src={img} alt={alt} />
            <div className={style.new}>
              <h1 className="pt-10">{title}</h1>
              <p className="text-gray">{text}</p>
            </div>
            <div
              className={
                bodyMode.includes("LightMode") ? style.ago : style.ago_dark
              }
            >
              {ago}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default News;
