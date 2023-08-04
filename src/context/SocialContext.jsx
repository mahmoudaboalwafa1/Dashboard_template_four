import React, { createContext } from "react";
import useInput from "./useInput";

const ContextSocial = createContext();

const ContextSocialProvider = ({ children }) => {
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
    <ContextSocial.Provider
      value={{
        twitterUser,
        facebookUser,
        linkedinUser,
        youtubeUser,
      }}
    >
      {children}
    </ContextSocial.Provider>
  );
};

export { ContextSocialProvider, ContextSocial };
