import { Octokit } from "@octokit/rest";
import React, { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SetProjectsData } from "../redux/actionMethod";
import { AlertError } from "../components/MessageAlert";

const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const bodyMode = useSelector((state) => state.modeNow);
  const userInfo = useSelector((state) => state.userInfo);
  const userAuth = useSelector((state) => state.UserAuth.user);
  const projectsData = useSelector((state) =>
    state.ProjectsData ? state.ProjectsData : false
  );
  const [error, setError] = useState("");
  const [commits, setCommits] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const getRepo = async () => {
      const octokit = new Octokit({
        auth: "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",
      });
      if (userAuth?.providerData[0]?.providerId === "github.com") {
        try {
          const response = await octokit.repos.listForUser({
            username: userAuth.reloadUserInfo.screenName,
          });
          response && dispatch(SetProjectsData(response.data));
          const commitsPromiess = response.data.map(async (repo) => {
            const getCommits = await octokit.repos.listCommits({
              owner: userAuth.reloadUserInfo.screenName,
              repo: repo.name,
            });
            return getCommits.data;
          });
          const commitsData = await Promise.all(commitsPromiess);
          setCommits(commitsData);
        } catch (error) {
          error.message && setError(error.message);
        }
      }
    };
    userAuth && getRepo();
  }, [userAuth, commits]);

  return (
    <DashboardContext.Provider
      value={{
        bodyMode,
        projectsData,
        userInfo,
        userAuth,
        commits,
        error,
        setError,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardProvider };
