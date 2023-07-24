import React from "react";
import style from "../../../css/pages/home.module.css";
import { classesUploads } from "./classNames/HomeClassNames";
import UploadsData from "../data/UploadsData";
import { useSelector } from "react-redux";

const Upload = () => {
  const { classOne, classTwo } = classesUploads;
  const bodyMode = useSelector((state) => state.modeNow);
  return (
    <section className={`${style.upload} ${classOne}`}>
      <div className="container">
        <h1 className={`${style.center} fs-25`}>Latest Uploads</h1>

        {UploadsData.map((upload, index) => {
          const { img, alt, fileName, author, size } = upload;
          return (
            <div key={index} className={`${style.upp} ${classTwo}`}>
              <img src={img} alt={alt} />
              <div className={`${style.textupload} ps-10`}>
                <h1>{fileName}</h1>
                <p className="text-gray">{author}</p>
              </div>
              <div
                className={`${
                  bodyMode.includes("LightMode") ? style.mb : style.mb_dark
                } bg-gray`}
              >
                {size}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Upload;
