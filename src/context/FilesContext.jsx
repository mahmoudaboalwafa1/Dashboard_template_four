import React, { useState, createContext } from "react";
import { useSelector } from "react-redux";
import {
  JpgImg,
  Mp3Img,
  Mp4Img,
  PdfImg,
  PngImg,
  UnkownTypeImg,
} from "../images";

const FilesContext = createContext(null);

const FileProvider = ({ children }) => {
  const FilesData = useSelector((state) => state.FilesData);
  const [index, setIndex] = useState();

  const GetName = (name) => {
    const result = name?.length > 20 ? `${name?.slice(0, 21)}...` : name;
    return result;
  };

  const GetSize = (size) => {
    const result =
      size < 1000000
        ? `${(size / 1024).toFixed(2)}KB`
        : `${(size / 1024 / 1024).toFixed(2)}MB`;

    return result;
  };

  const GetDate = () => {
    const result = new Date().toDateString();

    return result;
  };

  const GetImg = (type) => {
    const result = type.includes("pdf")
      ? PdfImg
      : type.includes("png")
      ? PngImg
      : type.includes("svg")
      ? SvgImg
      : type.includes("jpeg")
      ? JpgImg
      : type.includes("webp")
      ? ""
      : type.includes("audio")
      ? Mp3Img
      : type.includes("video")
      ? Mp4Img
      : UnkownTypeImg;

    return result;
  };

  const handleFileNow = (index) => {
    setIndex(index);
  };

  return (
    <FilesContext.Provider
      value={{
        FilesData,
        GetName,
        GetSize,
        GetDate,
        GetImg,
        handleFileNow,
        index,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
};

export { FilesContext, FileProvider };
