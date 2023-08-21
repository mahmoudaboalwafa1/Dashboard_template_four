import React, { useState, useContext, createContext } from "react";
import { FilesContext } from "./FilesContext";
import { useSelector } from "react-redux";

const FriendsContext = createContext(null);

const FriendsProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [userNow, setUserNow] = useState();
  const [updatedUserData, setUpdatedUserData] = useState([]);
  const projectsData = useSelector((state) => state.ProjectsData);
  const userAuth = useSelector((state) => state.UserAuth.user);
  const [dataUsers, setDataUsers] = useState([]);
  const [loading, setLoading] = useState("wait to loading users");
  const { filesDb } = useContext(FilesContext);

  const HandleCurrentUser = (index) => {
    setUserNow(index);
  };

  const [dataFriend, setDataFriend] = useState({
    name: "",
    photo: "",
    friends: 0,
    projects: "",
    files: "",
    number: "",
    email: "",
  });

  return (
    <FriendsContext.Provider
      value={{
        error,
        setError,
        projectsData,
        userAuth,
        dataUsers,
        setDataUsers,
        loading,
        setLoading,
        filesDb,
        dataFriend,
        setDataFriend,
        userNow,
        HandleCurrentUser,
        updatedUserData,
        setUpdatedUserData,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export { FriendsContext, FriendsProvider };
