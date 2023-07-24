import React, { createContext } from "react";
import useInput from "./useInput";

const ApiContext = createContext();

const ProviderContext = ({ children }) => {
  const [twitterUser, setTwitterUser] = useInput(
    "",
    "text",
    "Twitter Username"
  );
  const [facebookUser, setFacebookUser] = useInput(
    "",
    "text",
    "Facebook Username"
  );
  const [linkedinUser, setLinkedinUser] = useInput(
    "",
    "text",
    "Linkedin Username"
  );
  const [youtubeUser, setYoutubeUser] = useInput(
    "",
    "text",
    "Youtube Username"
  );
  return (
    <ApiContext.Provider
      value={{
        twitterUser,
        facebookUser,
        linkedinUser,
        youtubeUser,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ProviderContext, ApiContext };
