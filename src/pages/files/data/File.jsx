import React, { useContext } from "react";
import Collection from "../../../components/Collection";
import { FilesContext } from "../../../context/FilesContext";

const File = () => {
  const { index, filesDb } = useContext(FilesContext);

  if (filesDb?.length > 0) {
    return (
      <Collection MainTitle={filesDb[index]?.name}>
        {filesDb?.length > 0 && filesDb[index]?.type.includes("image") ? (
          <img src={filesDb[index].url} alt={filesDb[index]?.name} />
        ) : filesDb[index]?.type.includes("video") ? (
          <video src={filesDb[index].url} controls></video>
        ) : filesDb[index]?.type.includes("audio") ? (
          <audio src={filesDb[index].url} controls></audio>
        ) : (
          <iframe src={filesDb[index].url}></iframe>
        )}
      </Collection>
    );
  }
};

export default File;
