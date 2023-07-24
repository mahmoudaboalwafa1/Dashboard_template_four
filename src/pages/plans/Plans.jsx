import React from "react";
import Collection from "../../components/collection";
import PlansData from "./data/PlansData";
import style from "../../css/pages/plans.module.css";
import { useSelector } from "react-redux";
import PlansClasses from "./classNames/plansClasses";

const Plans = () => {
  const { classOne, classTwo, classThree, classFour } = PlansClasses;
  const { classFive, classSix, classSeven } = PlansClasses;
  const bodyMode = useSelector((state) => state.modeNow);
  return (
    <Collection MainTitle="Plans">
      <div className={`${style.plans}`}>
        {PlansData.map((plan, index) => {
          const { name, price, access, join, current, color, btnColor } = plan;
          return (
            <div key={index} className={classSeven(bodyMode)}>
              <div className={classFive(color)}>
                <h1 className="pt-20">{name}</h1>
                <h2 className="pb-20">{price}</h2>
              </div>
              {access.map((li, index) => {
                const { text, premission } = li;
                return (
                  <div
                    key={index}
                    className={`${style.detail_plan} ${classOne}`}
                  >
                    <span className="d-flex">
                      <i className={`${premission}${classTwo}`}></i>
                      <p className="ps-10">{text}</p>
                    </span>
                    <i className={`${style.help} ${classThree}`}></i>
                  </div>
                );
              })}
              <p className={classSix(btnColor, current, classFour)}>{join}</p>
            </div>
          );
        })}
      </div>
      <></>
    </Collection>
  );
};

export default Plans;
