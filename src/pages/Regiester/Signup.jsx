import React from "react";
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

const Signup = () => {
  const [username, setUserName] = useInput("", "text", "username");
  const [email, setEmail] = useInput("", "text", "email");
  const [password, setPassword] = useInput("", "password", "password");
  const dispatch = useDispatch();

  const createNewUser = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value).then(
      (user) => dispatch(SetUserAuth(user))
    );
    console.log(email.value);
  };

  onAuthStateChanged(auth, (user) => {
    user.providerData[0].providerId === "password" &&
      updateProfile(auth.currentUser, { displayName: username.value });
    dispatch(SetUserAuth(user));
    console.log(user);
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
