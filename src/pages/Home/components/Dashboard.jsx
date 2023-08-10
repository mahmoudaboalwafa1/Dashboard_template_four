import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "../../../css/pages/home.module.css";
import { DashboardData, DashboardDataTwo } from "../data/DashboardData";
import DashboardClasses from "./classNames/DashboardClasses";
import { DashboardContext } from "../../../context/DashboardContext";
// Images Import
import { WelcomeImg, UserImg } from "../../../images";
import { AlertError } from "../../../components/MessageAlert";

const Dashboard = () => {
  const { dashMode, padding, border, classOne } = DashboardClasses;
  const { alignCenter, btnShape, detailText } = DashboardClasses;
  const { bodyMode, projectsData, userInfo, userAuth, error } =
    useContext(DashboardContext);
  const { lastName, titleWelcome } = DashboardDataTwo;

  return (
    <section className={style.dashboard}>
      <div className={dashMode(bodyMode, classOne)}>
        <div className={style.textdash}>
          <h1 className="fs-25">welcome</h1>
          <p>{lastName}</p>
        </div>
        <img className={padding} src={WelcomeImg} />
      </div>
      <img
        className={style.avatar}
        src={userAuth.photoURL ? userAuth.photoURL : UserImg}
      />
      <div className={border}>
        <div className={alignCenter}>
          {DashboardData.map((dash) => {
            const { title, text, id } = dash;
            return (
              <div className={detailText} key={id}>
                <h1>
                  {titleWelcome(userInfo, userAuth, title, projectsData, id)}
                </h1>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <Link className={btnShape} to="/profile">
          Profile
        </Link>
      </div>
      {error && <AlertError message={error} />}
    </section>
  );
};

export default Dashboard;
