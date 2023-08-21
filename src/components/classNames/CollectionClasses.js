import style from "../../css/pages/home.module.css";
import styleFile from "../../css/pages/files.module.css";

const CollectionClasses = {
  mainTitle: (
    MainTitle,
    FilesData,
    dataUsers,
    userNow,
    updatedUserData,
    filesDb
  ) => {
    return MainTitle == "Courses"
      ? ""
      : MainTitle === "Friends" && updatedUserData.length <= 2
      ? "h-100-friends"
      : MainTitle === "Profile"
      ? ""
      : MainTitle === "Plans" || MainTitle === dataUsers[userNow]?.name
      ? ""
      : MainTitle === "Files" && filesDb.length <= 2
      ? `d-flex h-100 ${styleFile.files} ${
          FilesData ? [...FilesData]?.length < 4 && "h-100" : ""
        }`
      : style.all;
  },
};

export default CollectionClasses;
