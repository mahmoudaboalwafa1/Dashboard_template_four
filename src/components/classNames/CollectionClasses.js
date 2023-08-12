import style from "../../css/pages/home.module.css";
import styleFile from "../../css/pages/files.module.css";

const CollectionClasses = {
  mainTitle: (MainTitle, FilesData, dataUsers, userNow) => {
    return MainTitle == "Courses"
      ? ""
      : MainTitle === "Friends" && dataUsers.length < 3
      ? "h-100"
      : MainTitle === "Profile"
      ? ""
      : MainTitle === "Plans" || MainTitle === dataUsers[userNow]?.name
      ? ""
      : MainTitle === "Files"
      ? `d-flex ${styleFile.files} ${
          FilesData ? [...FilesData]?.length < 4 && "h-100" : ""
        }`
      : style.all;
  },
};

export default CollectionClasses;
