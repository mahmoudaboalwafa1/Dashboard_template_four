import React, { createContext } from "react";
import { GithubProvider, GoogleProvider, auth } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const SigninContext = createContext();

const SigninProvider = ({ children }) => {
  const SignWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider).catch((error) =>
      alert(error.message)
    );
  };

  const SignWithGithub = () => {
    signInWithPopup(auth, GithubProvider).catch((error) =>
      alert(error.message)
    );
  };

  return (
    <SigninContext.Provider value={{ SignWithGoogle, SignWithGithub }}>
      {children}
    </SigninContext.Provider>
  );
};

export { SigninContext, SigninProvider };
