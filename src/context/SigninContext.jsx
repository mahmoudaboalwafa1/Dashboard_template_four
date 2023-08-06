import React, { useState, createContext } from "react";
import { GithubProvider, GoogleProvider, auth } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const SigninContext = createContext();

const SigninProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [connect, setConnect] = useState({ google: true, github: true });

  const SignWithGoogle = () => {
    connect.google &&
      signInWithPopup(auth, GoogleProvider).catch((err) =>
        setError(err.message)
      );
    setConnect({ google: false, github: false });
  };

  const SignWithGithub = () => {
    connect.github &&
      signInWithPopup(auth, GithubProvider).catch((err) =>
        setError(err.message)
      );
    setConnect({ google: false, github: false });
  };

  if (!connect.github && !connect.google) {
    setConnect({ google: true, github: true });
  }

  return (
    <SigninContext.Provider value={{ SignWithGoogle, SignWithGithub, error }}>
      {children}
    </SigninContext.Provider>
  );
};

export { SigninContext, SigninProvider };
