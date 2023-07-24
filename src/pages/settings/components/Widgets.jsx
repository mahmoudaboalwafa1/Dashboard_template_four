import React, { Fragment } from "react";
import style from "../../../css/pages/settings.module.css";
import { useDispatch, useSelector } from "react-redux";
import { HideShowWidget } from "../../../redux/actionMethod";

const Widgets = () => {
  const dispatch = useDispatch();
  const WidgetsData = useSelector((state) => state.WidgetsData);
  const changeCheckBox = (e, index) => {
    dispatch(HideShowWidget(e.target.checked, index));
  };
  return (
    <section className={`${style.widgets} bg-light border-r-10 pb-20`}>
      <div className="container">
        <h1 className="fs-25 pt-10 text-sm-center">Widgets Control</h1>
        <p className="pt-10 text-gray">Show/Hide Widgets</p>
        <form className="pt-20">
          {WidgetsData.map((widget, index) => {
            const { id, checked, lableTitle } = widget;
            return (
              <Fragment key={index}>
                <input
                  onChange={(e) => changeCheckBox(e, index)}
                  key={id}
                  id={id}
                  type="checkbox"
                  checked={checked}
                />
                <label htmlFor={id} className="ps-10">
                  {lableTitle}
                </label>
                <br />
                <br />
              </Fragment>
            );
          })}
        </form>
      </div>
    </section>
  );
};

export default Widgets;
