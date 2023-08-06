import React, { useState, useEffect } from "react";
import useInput from "../../../context/useInput";
import style from "../../../css/pages/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import handleSubmit from "../data/DraftData";
import { AddTask } from "../../../redux/actionMethod";
import DraftClasses from "./classNames/DraftClasses";

const Draft = () => {
  const [titleDraft, setTitleDraft] = useInput("", "text", "Title");
  const [textDraft, setTextDraft] = useInput("", "", "Your Thought");
  const [error, setError] = useState(false);
  const userAuth = useSelector((state) => state.UserAuth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (titleDraft.value.length > 0 || textDraft.value.length > 0) {
      setError(false);
    }
  }, [titleDraft.value, textDraft.value]);

  const { pb10, textGray, sectionClass } = DraftClasses;
  const { padding_maring, paddinglttp, btnShape } = DraftClasses;
  return (
    <section className={sectionClass}>
      <h1 className={pb10}>Quick Draft</h1>
      <p className={textGray}>Write A Draft For Your Ideas</p>
      <form className="pe-20" onSubmit={(e) => e.preventDefault()}>
        <input className={padding_maring} {...titleDraft} />
        <textarea className={paddinglttp} {...textDraft}></textarea>
        <button
          className={btnShape}
          onClick={() =>
            handleSubmit(
              titleDraft,
              textDraft,
              setTitleDraft,
              setTextDraft,
              dispatch,
              AddTask,
              setError,
              userAuth
            )
          }
        >
          Save
        </button>
        {error && <div className={style.alert_error}>{error}</div>}
      </form>
    </section>
  );
};

export default Draft;
