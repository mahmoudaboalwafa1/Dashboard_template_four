import React, { useContext } from "react";
import Collection from "../../components/Collection";
import useInput from "../../context/useInput";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { SetUserAuth } from "../../redux/actionMethod";
import { auth } from "../../firebase";
import { SigninContext } from "../../context/SigninContext";

const Signup = () => {
  const [username, setUserName] = useInput("", "text", "username");
  const [email, setEmail] = useInput("", "text", "email");
  const [password, setPassword] = useInput("", "password", "password");
  const { setError } = useContext(SigninContext);
  const dispatch = useDispatch();

  const createNewUser = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((user) => {
        updateProfile(auth.currentUser, { displayName: username.value });
        dispatch(SetUserAuth(user));
      })
      .catch((err) => setError(err.message));
  };

  onAuthStateChanged(auth, (user) => {
    dispatch(SetUserAuth(user));
  });
  return (
    <Collection MainTitle="Signup">
      <input className="signup" {...username} />
      <input className="signup" {...email} />
      <input className="signup" {...password} />
      <button
        onClick={createNewUser}
        className="signup"
        style={{ padding: "20px" }}
      >
        Send
      </button>
    </Collection>
  );
};

export default Signup;
