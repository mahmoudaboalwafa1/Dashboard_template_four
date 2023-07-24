import React from "react";
import ControlClasses from "../classNames/ControlClasses";

const Control = () => {
  const { mainClass, classFonts, classText, classBorder } = ControlClasses;
  const { SpaceBetween, textGray, classToggle } = ControlClasses;
  return (
    <section className={mainClass}>
      <div className="container">
        <h1 className={classFonts}>Site Control</h1>
        <p className={classText}>Control The Website If There Is Maintenance</p>
        <div className={SpaceBetween}>
          <ul className="pt-20">
            <li className="pb-5">Website Control</li>
            <li className={textGray}>Open/Close Website And Type The Reason</li>
          </ul>
          <input type="checkbox" className={classToggle} />
        </div>
        <textarea
          className={classBorder}
          placeholder="Close Message Content"
        ></textarea>
      </div>
    </section>
  );
};

export default Control;
