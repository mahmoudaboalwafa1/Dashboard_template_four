const handleSubmit = (
  titleDraft,
  textDraft,
  setTitleDraft,
  setTextDraft,
  dispatch,
  AddTask,
  setError
) => {
  if (titleDraft.value.length > 0 || textDraft.value.length > 0) {
    dispatch(AddTask(titleDraft.value, textDraft.value));
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
};

export default handleSubmit;
