import React, { useEffect } from "react";
import Collection from "../../components/Collection";
import { useDispatch } from "react-redux";
import { SetProjectsData, SetUserAuth } from "../../redux/actionMethod";
import { useNavigate, useLocation } from "react-router-dom";

const Guest = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const user = { displayName: "user name", photoURL: null };
  const dispatch = useDispatch();
  dispatch(SetProjectsData([]));
  useEffect(() => {
    dispatch(SetUserAuth(user));
    navigate("/");
  }, [path]);
  return <Collection MainTitle="Guest">Guest</Collection>;
};

export default Guest;
