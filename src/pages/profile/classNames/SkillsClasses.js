import styleSkills from "../../../css/pages/profile.module.css";

const SkillsClasses = {
  sectionSkills: `${styleSkills.skills} bg-light border-r-10 ms-20 mb-20`,
  titleSkills: "fs-25 pt-20 pb-10 text-sm-center",
  textSkills: "text-gray pb-10 text-sm-center",
  containerSkills: `${styleSkills.container_skills} pt-20`,
  skillsDark: (bodyMode) => {
    return bodyMode.includes("LightMode")
      ? styleSkills.skills_item
      : styleSkills.skills_item_dark;
  },
};

export default SkillsClasses;
