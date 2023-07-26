import React from "react";
import Collection from "../../components/collection";
import FilesData from "./data/FilesData";
import style from "../../css/pages/files.module.css";
import FilesClasses from "./classNames/FilesClasses";
import Static from "./Statics";

const Files = () => {
  const { filesContainer, iconDownload, textGray } = FilesClasses;
  const { spaceBetween } = FilesClasses;
  return (
    <Collection MainTitle="Files">
      <div className={style.allfiles}>
        {FilesData.map((file, index) => {
          const { ImgFile, text, creator, date, size } = file;
          return (
            <div key={index} className={filesContainer}>
              <div className={style.file}>
                <i className={iconDownload}></i>
                <div className={`${style.fil} d-flex`}>
                  <img className="pb-20" src={ImgFile} alt={text} />
                  <p>{text}</p>
                </div>
                <p className={textGray}>{creator}</p>
                <ul className={`${size} ${spaceBetween}`}>
                  <li>{date}</li>
                  <li>{size}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <Static />
    </Collection>
  );
};

export default Files;
