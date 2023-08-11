import React, { useState, useEffect, useContext } from "react";
import Collection from "../../components/Collection";
import styleFiles from "../../css/pages/files.module.css";
import FilesClasses from "./classNames/FilesClasses";
import Supported from "./Supported";
import RequireAuth from "../Regiester/RequireAuth";
import { FilesContext } from "../../context/FilesContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AlertLoading } from "../../components/MessageAlert";

const Files = () => {
  const {
    FilesData,
    GetName,
    GetSize,
    GetDate,
    GetImg,
    handleFileNow,
    SaveFilesToDataBase,
    setFilesDb,
    filesDb,
    loading,
    setLoading,
  } = useContext(FilesContext);
  const { filesContainer, iconDownload, textGray, spaceBetween } = FilesClasses;
  const [filesCurrent, setFilesCurrent] = useState([]);
  const userAuth = useSelector((state) => state.UserAuth.user);

  useEffect(() => {
    const unsub = () => {
      if (FilesData?.length > 0) {
        SaveFilesToDataBase().then((files) => setFilesCurrent(files));
      }

      if (filesCurrent?.length > 0 && filesDb?.length === 0) {
        const filesRef = doc(db, "dataUser", userAuth?.displayName);
        setDoc(filesRef, { files: filesCurrent }, { merge: true });
        console.log("setDoc");
      } else if (filesCurrent?.length > 0 && filesDb?.length > 0) {
        const filesRef = doc(db, "dataUser", userAuth?.displayName);
        getDoc(filesRef).then((files) => {
          updateDoc(filesRef, { files: filesCurrent });
          setFilesCurrent([]);
        });
      }
    };

    const unsubSnapshot = () => {
      const filesRef = doc(db, "dataUser", userAuth?.displayName);
      onSnapshot(filesRef, (files) => {
        setFilesDb(files.data().files);
      });
    };

    unsubSnapshot();
    unsub();
    return unsub;
  }, [FilesData, filesCurrent]);

  return (
    <RequireAuth>
      <Collection MainTitle="Files">
        <div className={styleFiles.allfiles}>
          {filesDb?.length > 0 ? (
            filesDb?.map((file, index) => {
              const { name, user, type, size, url } = file;

              return (
                <div key={index} className={filesContainer}>
                  <div className={styleFiles.file}>
                    <a href={url && url} download={name}>
                      <i className={iconDownload}></i>
                    </a>
                    <div className={`${styleFiles.fil} d-flex`}>
                      <Link to={`/files/${name}`}>
                        <img
                          onClick={() => handleFileNow(index)}
                          className="pb-20"
                          src={GetImg(type)}
                          alt={"text"}
                        />
                      </Link>
                      <p>{GetName(name)}</p>
                    </div>
                    <p className={textGray}>{user}</p>
                    <ul className={`size ${spaceBetween}`}>
                      <li dir="rtl">{GetDate()}</li>
                      <li>{GetSize(size)}</li>
                    </ul>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Files Here</p>
          )}
        </div>
        {loading && <AlertLoading message={loading} />}
        <Supported />
      </Collection>
    </RequireAuth>
  );
};

export default Files;
