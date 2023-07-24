import React from "react";
import style from "../../../css/pages/settings.module.css";
import BackupClasses from "../classNames/BackupClasses";
import { BackupDataOne, BackupDataTwo } from "../data/BackupData";

const Backup = () => {
  const { classSection, textCenter, textGray } = BackupClasses;
  return (
    <section className={classSection}>
      <div className="container">
        <h1 className={textCenter}>Backup Manager</h1>
        <p className={textGray}>Control Backup Time And Location</p>
        <form>
          {BackupDataOne.map((backup) => {
            const { className, id, word } = backup;
            return (
              <div key={id} className={className}>
                <input
                  type="radio"
                  id={id}
                  checked
                  name="radio"
                  value="radio"
                />
                <label className="ps-10" htmlFor={id}>
                  {word}
                </label>
              </div>
            );
          })}
        </form>
        <div className={style.Mega}>
          <form>
            {BackupDataTwo.map((backup) => {
              const { iconServer, id, word } = backup;
              return (
                <label className="p-relative" htmlFor={id}>
                  {word}
                  <i className={iconServer}></i>
                  <input type="radio" name="check" value="check" id={id} />
                </label>
              );
            })}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Backup;
