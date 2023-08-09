import React, { Fragment, useRef } from "react";
import StatisticsData from "./data/StatisticsData";
import StaticClasses from "./classNames/StaticsClasses";
import { useDispatch } from "react-redux";
import { SetFiles } from "../../redux/actionMethod";

const Supported = () => {
  const { staticsParent, titleStatics, staticBox, iconFile } = StaticClasses;
  const uploadInput = useRef();
  const dispatch = useDispatch();

  const handleUpload = () => {
    uploadInput.current.click();
  };
  const handleChange = (e) => {
    const file = e.target.files;
    dispatch(SetFiles(file));
  };
  const { btnShape, arrowUp } = StaticClasses;
  return (
    <div className={staticsParent}>
      <div className="container">
        <h3 className={titleStatics}>Files Supported</h3>

        {StatisticsData.map((stat, index) => {
          const { fileImg, text, color } = stat;
          return (
            <Fragment key={index}>
              <div className={staticBox}>
                <i className={iconFile(fileImg, color)}></i>
                <ul className="ps-20">
                  <li>{text}</li>
                </ul>
              </div>
            </Fragment>
          );
        })}
        <a className={btnShape}>
          {" "}
          <i className={arrowUp}></i>
          <input
            multiple
            style={{ display: "none" }}
            type="file"
            ref={uploadInput}
            onChange={handleChange}
          />
          <p onClick={handleUpload} className="ps-10">
            Upload
          </p>
        </a>
      </div>
    </div>
  );
};

export default Supported;
