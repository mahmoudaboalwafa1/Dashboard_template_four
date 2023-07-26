import style from "../../css/pages/home.module.css";
import styleFile from "../../css/pages/files.module.css";

const CollectionClasses = {
  mainTitle: (MainTitle) => {
    return MainTitle == "Courses"
      ? ""
      : MainTitle === "Friends"
      ? ""
      : MainTitle === "Profile"
      ? ""
      : MainTitle === "Plans"
      ? ""
      : MainTitle === "Files"
      ? `d-flex ${styleFile.files}`
      : style.all;
  },
};

export default CollectionClasses;
