import React from "react";
import styleProfile from "../../../css/pages/profile.module.css";
import ProfileSettingsClasses from "../classNames/ProfileSettingsClasses";
import ProfileSettingsDatas from "../data/ProfileSettingsData";
import { UpdProfileSettings } from "../../../redux/actionMethod";
import { useSelector, useDispatch } from "react-redux";

const DatasProfileSettings = () => {
  const { changeToDark, changeToCheck, textGrayTwo } = ProfileSettingsClasses;
  const { changeToCheckTwo, changeToCheckThree } = ProfileSettingsClasses;
  const { oneTitle, inputProps } = ProfileSettingsDatas;
  const ProfileSettingsData = useSelector((state) => state.profileSettingsData);
  const bodyMode = useSelector((state) => state.modeNow);
  const userAuth = useSelector((state) => state.UserAuth.user);

  const dispatch = useDispatch();
  const handleCheckBox = (e, index) => {
    dispatch(UpdProfileSettings({ check: e.target.checked, id: index }));
  };
  return (
    <div className={styleProfile.datas}>
      {ProfileSettingsData.map((setting, index) => {
        const { title, textOne, titleTwo, textTwo, titleThree } = setting;
        const { textThree, titleFour, checked, id } = setting;
        return (
          <div>
            <ul key={index} className={changeToDark(bodyMode)}>
              <p className="text-gray">{title}</p>
              <div className={styleProfile.info}>
                <div className={changeToCheck(checked)}>
                  <li className={textGrayTwo}>
                    {titleTwo}
                    <input placeholder={oneTitle(userAuth, textOne, id)} />
                  </li>
                </div>
                <div className={changeToCheckTwo(checked)}>
                  <li className="pt-20 text-gray">
                    {titleThree}
                    <input placeholder={textTwo} />
                  </li>
                </div>
                <div className={changeToCheckThree(checked)}>
                  <li className="pt-20 text-gray">
                    {titleFour}
                    <input placeholder={textThree} />
                  </li>
                </div>
              </div>
              <input
                checked={checked}
                {...inputProps}
                onChange={(e) => handleCheckBox(e, index)}
              />
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DatasProfileSettings;
