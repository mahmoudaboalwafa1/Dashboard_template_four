import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "../../../css/pages/home.module.css";
// Images Import
import { WelcomeImg, AvatarImg } from "../../../images";
import { DashboardData, DashboardDataTwo } from "../data/DashboardData";
import DashboardClasses from "./classNames/DashboardClasses";

const Dashboard = () => {
  const bodyMode = useSelector((state) => state.modeNow);
  const userInfo = useSelector((state) => state.userInfo);

  const { dashMode, padding, border, classOne } = DashboardClasses;
  const { alignCenter, btnShape, detailText } = DashboardClasses;
  const { lastName, fullName } = DashboardDataTwo;
  return (
    <section className={style.dashboard}>
      <div className={dashMode(bodyMode, classOne)}>
        <div className={style.textdash}>
          <h1 className="fs-25">welcome</h1>
          <p>{lastName}</p>
        </div>
        <img className={padding} src={WelcomeImg} />
      </div>
      <img className={style.avatar} src={AvatarImg} />
      <div className={border}>
        <div className={alignCenter}>
          {DashboardData.map((dash, index) => {
            const { title, name, text } = dash;
            return (
              <div className={detailText} key={index}>
                <h1>{fullName(userInfo, title, name)}</h1>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <Link className={btnShape} to="/profile">
          Profile
        </Link>
      </div>
    </section>
  );
};

export default Dashboard;
