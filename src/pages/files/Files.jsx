import React, { useState, useEffect, useContext } from "react";
import Collection from "../../components/Collection";
import styleFiles from "../../css/pages/files.module.css";
import FilesClasses from "./classNames/FilesClasses";
import Supported from "./Supported";
import RequireAuth from "../Regiester/RequireAuth";
import { FilesContext } from "../../context/FilesContext";
import { Link } from "react-router-dom";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Files = () => {
  const { FilesData, GetName, GetSize, GetDate, GetImg, handleFileNow } =
    useContext(FilesContext);
  const [files, setFiles] = useState([]);
  const userAuth = useSelector((state) => state.UserAuth.user);
  const { filesContainer, iconDownload, textGray, spaceBetween } = FilesClasses;
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    const unSub = () => {
      if (FilesData?.length > 0) {
        const filesRef = doc(db, "dataUser", userAuth?.displayName);
        onSnapshot(filesRef, (userData) => {
          setFiles(userData.data());
        });

        for (let i = 0; i < FilesData.length; i++) {
          const storageRef = ref(storage, `/filesUser/${FilesData[i].name}`);
          uploadBytes(storageRef, FilesData[i]).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadUrl) => {
              const data = [
                {
                  url: downloadUrl,
                  type: FilesData[i].type,
                  size: FilesData[i].size,
                },
              ];
              if (!files.files || files.files?.length === 0) {
                setDoc(
                  filesRef,
                  { files: data },
                  { merge: true, mergeFields: true }
                );
              } else {
                updateDoc(filesRef, { files: data });
                console.log("updateDoc");
              }
            });
          });
        }
      }
    };
    unSub();
    return unSub;
  }, [files, FilesData, dataUser]);

  return (
    <RequireAuth>
      <Collection MainTitle="Files">
        <div className={styleFiles.allfiles}>
          {FilesData?.length > 0 ? (
            [...FilesData]?.map((file, index) => {
              const { name, type, size } = file;
              return (
                <div key={index} className={filesContainer}>
                  <div className={styleFiles.file}>
                    <i className={iconDownload}></i>
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
                    <p className={textGray}>{"creator"}</p>
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
        <Supported />
      </Collection>
    </RequireAuth>
  );
};

export default Files;
