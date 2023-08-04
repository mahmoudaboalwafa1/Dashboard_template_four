import React from "react";
import Collection from "../../components/Collection";
import PlansData from "./data/PlansData";
import style from "../../css/pages/plans.module.css";
import { useSelector } from "react-redux";
import PlansClasses from "./classNames/plansClasses";
import RequireAuth from "../Regiester/RequireAuth";

const Plans = () => {
  const { PlansContainer, classPremissions, classHelp, textGray } =
    PlansClasses;
  const { bgPlan, btnBg, planDarkMode } = PlansClasses;
  const bodyMode = useSelector((state) => state.modeNow);
  return (
    <RequireAuth>
      <Collection MainTitle="Plans">
        <div className={`${style.plans}`}>
          {PlansData.map((plan, index) => {
            const { name, price, access, join, current, color, btnColor } =
              plan;
            return (
              <div key={index} className={planDarkMode(bodyMode)}>
                <div className={bgPlan(color)}>
                  <h1 className="pt-20">{name}</h1>
                  <h2 className="pb-20">{price}</h2>
                </div>
                {access.map((li, index) => {
                  const { text, premission } = li;
                  return (
                    <div key={index} className={PlansContainer}>
                      <span className="d-flex">
                        <i className={classPremissions(premission)}></i>
                        <p className="ps-10">{text}</p>
                      </span>
                      <i className={classHelp}></i>
                    </div>
                  );
                })}
                <p className={btnBg(btnColor, current, textGray)}>{join}</p>
              </div>
            );
          })}
        </div>
        <></>
      </Collection>
    </RequireAuth>
  );
};

export default Plans;
