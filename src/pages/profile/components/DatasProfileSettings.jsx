import React from "react";
import styleProfile from "../../../css/pages/profile.module.css";
import ProfileSettingsClasses from "../classNames/ProfileSettingsClasses";
import ProfileSettingsDatas from "../data/ProfileSettingsData";
import { UpdProfileSettings } from "../../../redux/actionMethod";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const DatasProfileSettings = ({ friend, dataUsers, userNow }) => {
  const { changeToDark, changeToCheck, textGrayTwo } = ProfileSettingsClasses;
  const { changeToCheckTwo, changeToCheckThree } = ProfileSettingsClasses;
  const { oneTitle, inputProps } = ProfileSettingsDatas;
  const ProfileSettingsData = useSelector((state) => state.profileSettingsData);
  const bodyMode = useSelector((state) => state.modeNow);
  const userAuth = useSelector((state) => state.UserAuth.user);
  const friendLocation = useLocation();

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
                    <input
                      placeholder={oneTitle(
                        userAuth,
                        textOne,
                        id,
                        dataUsers && dataUsers[userNow]?.name
                      )}
                    />
                  </li>
                </div>
                <div className={changeToCheckTwo(checked)}>
                  <li className="pt-20 text-gray">
                    {titleThree}
                    {!friendLocation.pathname?.includes("friends") && (
                      <input placeholder={textTwo} />
                    )}
                  </li>
                </div>
                <div className={changeToCheckThree(checked)}>
                  <li className="pt-20 text-gray">
                    {titleFour}
                    {!friendLocation.pathname?.includes("friends") && (
                      <input placeholder={textThree} />
                    )}
                  </li>
                </div>
              </div>
              {!friendLocation.pathname?.includes("friends") && (
                <input
                  checked={checked}
                  {...inputProps}
                  onChange={(e) => handleCheckBox(e, index)}
                />
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DatasProfileSettings;
