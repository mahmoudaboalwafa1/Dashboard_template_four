const handleSubmit = (
  titleDraft,
  textDraft,
  setTitleDraft,
  setTextDraft,
  dispatch,
  AddTask,
  setError,
  userAuth
) => {
  if (titleDraft.value.length > 0 || textDraft.value.length > 0) {
    if (userAuth) {
      console.log(userAuth);
      dispatch(
        AddTask({
          title: titleDraft.value,
          text: textDraft.value,
          line: false,
          displayName: userAuth.displayName,
        })
      );
      setTextDraft({ ...textDraft, value: "" });
      setTitleDraft({ ...titleDraft, value: "" });
      window.scrollBy({
        top: document.getElementById("tasks").offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else {
      setError("You Must Fill Title Or Text");
    }
  }
};

export default handleSubmit;
