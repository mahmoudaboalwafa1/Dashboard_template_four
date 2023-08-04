import React, { useEffect, useContext } from "react";
import Collection from "../../components/Collection";
import "../../css/regestier.css";
import SigninData from "./data/SigninData";
import { SigninContext } from "../../context/SigninContext";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { SetUserAuth } from "../../redux/actionMethod";
import { auth } from "../../firebase";

const Signin = () => {
  const { SignWithGithub, SignWithGoogle, SignWithMicrosoft } =
    useContext(SigninContext);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(SetUserAuth(user));
      Navigate("/");
    });
  }, [auth]);
  return (
    <Collection MainTitle="Signin">
      {SigninData.map((btnSign) => {
        const { btnClass, id, alt, img, provider, textBtn } = btnSign;
        return (
          <button
            onClick={
              provider.includes("google")
                ? SignWithGoogle
                : provider.includes("github")
                ? SignWithGithub
                : SignWithMicrosoft
            }
            key={id}
            className={btnClass}
          >
            <img src={img} alt={alt} />
            <p>{textBtn}</p>
          </button>
        );
      })}
      <></>
    </Collection>
  );
};

export default Signin;
