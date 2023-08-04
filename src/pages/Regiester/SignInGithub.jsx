import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, GithubProvider } from "../../firebase";
import "../../css/regestier.css";
import { GithubIcon } from "../../images";

const SignInGithub = () => {
  const SignWithGithub = () => {
    signInWithPopup(auth, GithubProvider);
  };
  return (
    <button
      onClick={SignWithGithub}
      style={{ padding: "5px 20px" }}
      className="btn-sign"
    >
      <img src={GithubIcon} alt="github-icon" />
      <p>Sign In With Github</p>
    </button>
  );
};

export default SignInGithub;
