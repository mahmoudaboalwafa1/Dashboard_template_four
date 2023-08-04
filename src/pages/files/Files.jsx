import React from "react";
import Collection from "../../components/Collection";
import FilesData from "./data/FilesData";
import styleFiles from "../../css/pages/files.module.css";
import FilesClasses from "./classNames/FilesClasses";
import Static from "./Statics";
import RequireAuth from "../Regiester/RequireAuth";

const Files = () => {
  const { filesContainer, iconDownload, textGray } = FilesClasses;
  const { spaceBetween } = FilesClasses;
  return (
    <RequireAuth>
      <Collection MainTitle="Files">
        <div className={styleFiles.allfiles}>
          {FilesData.map((file, index) => {
            const { ImgFile, text, creator, date, size } = file;
            return (
              <div key={index} className={filesContainer}>
                <div className={styleFiles.file}>
                  <i className={iconDownload}></i>
                  <div className={`${styleFiles.fil} d-flex`}>
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
    </RequireAuth>
  );
};

export default Files;
