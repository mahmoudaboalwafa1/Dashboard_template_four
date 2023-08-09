import React, { useState, useEffect, useContext } from "react";
import Collection from "../../../components/Collection";
import { FilesContext } from "../../../context/FilesContext";

const File = () => {
  const { index, FilesData } = useContext(FilesContext);
  const [fileBlob, setFileBlob] = useState();

  useEffect(() => {
    const UnSub = () => {
      const file = new FileReader();
      file.readAsDataURL(FilesData[index]);
      file.onload = () => {
        setFileBlob(file.result);
      };
    };

    UnSub();
    return UnSub;
  }, [fileBlob]);

  return (
    <Collection MainTitle={FilesData[index].name}>
      {FilesData[index].type.includes("image") ? (
        <img src={fileBlob} />
      ) : FilesData[index].type.includes("video") ? (
        <video src={fileBlob}></video>
      ) : FilesData[index].type.includes("audio") ? (
        <audio src={fileBlob}></audio>
      ) : (
        <iframe src={fileBlob}></iframe>
      )}
    </Collection>
  );
};

export default File;
