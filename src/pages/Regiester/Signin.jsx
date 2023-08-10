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
import { AlertError, AlertSuccess } from "../../components/MessageAlert";
import { ContextNavbar } from "../../context/NavbarContext";

const Signin = () => {
  const { SignWithGithub, SignWithGoogle, error, setError } =
    useContext(SigninContext);
  const { message, setMessage } = useContext(ContextNavbar);
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
      {message.length > 0 && <AlertSuccess message={message} />}
      {error != false && <AlertError message={error} />}
      <></>
    </Collection>
  );
};

export default Signin;
