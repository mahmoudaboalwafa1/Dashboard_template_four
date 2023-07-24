import React from "react";
import style from "../../../css/pages/profile.module.css";
import ProfileSettingsClasses from "../classNames/ProfileSettingsClasses";
import ProfileSettingsDatas from "../data/ProfileSettingsData";
import { UpdProfileSettings } from "../../../redux/actionMethod";
import { useSelector, useDispatch } from "react-redux";

const DatasProfileSettings = () => {
  const { classSeven, classEight, classNine } = ProfileSettingsClasses;
  const { classTen, classEleven } = ProfileSettingsClasses;
  const { oneTitle, inputProps } = ProfileSettingsDatas;
  const ProfileSettingsData = useSelector((state) => state.profileSettingsData);
  const bodyMode = useSelector((state) => state.modeNow);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const handleCheckBox = (e, index) => {
    dispatch(UpdProfileSettings({ check: e.target.checked, id: index }));
  };
  return (
    <div className={style.datas}>
      {ProfileSettingsData.map((setting, index) => {
        const { title, textOne, titleTwo, textTwo } = setting;
        const { titleThree, textThree, titleFour, checked, id } = setting;
        return (
          <ul key={index} className={classSeven(bodyMode)}>
            <p className="text-gray">{title}</p>
            <div className={style.info}>
              <div className={classEight(checked)}>
                <li className={classNine}>
                  {titleTwo}
                  <span>{oneTitle(userInfo, textOne, id)}</span>
                </li>
              </div>
              <div className={classTen(checked)}>
                <li className="pt-20 text-gray">
                  {titleThree}
                  <span>{textTwo}</span>
                </li>
              </div>
              <div className={classEleven(checked)}>
                <li className="pt-20 text-gray">
                  {titleFour}
                  <span>{textThree}</span>
                </li>
              </div>
            </div>
            <input
              checked={checked}
              {...inputProps}
              onChange={(e) => handleCheckBox(e, index)}
            />
          </ul>
        );
      })}
    </div>
  );
};

export default DatasProfileSettings;
