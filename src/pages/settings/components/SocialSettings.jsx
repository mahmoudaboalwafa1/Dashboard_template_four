import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { setSocialInfo } from "../../../redux/actionMethod";
import { ApiContext } from "../../../context/mainContext";
import SocialSettingsClasses from "../classNames/SocialSettingsClasses";

const SocialSettings = () => {
  const dispatch = useDispatch();
  const { twitterUser, facebookUser, linkedinUser, youtubeUser } =
    useContext(ApiContext);

  const sendUserSocial = () => {
    if (
      twitterUser.value.length > 0 ||
      facebookUser.value.length > 0 ||
      linkedinUser.value.length > 0 ||
      youtubeUser.value.length > 0
    ) {
      dispatch(
        setSocialInfo(
          twitterUser.value,
          facebookUser.value,
          youtubeUser.value,
          linkedinUser.value
        )
      );
    }
  };
  const { classSection, textCenter, textGray } = SocialSettingsClasses;
  const { twitterIcon, facebookIcon, linkedinIcon, youtubeIcon } =
    SocialSettingsClasses;

  return (
    <section className={classSection}>
      <div className="container">
        <h1 className={textCenter}>Social Info</h1>
        <p className={textGray}>Social Media Information</p>
        <form>
          <i className={twitterIcon}></i>
          <input {...twitterUser} />
        </form>
        <form>
          <i className={facebookIcon}></i> <input {...facebookUser} />
        </form>
        <form>
          <i className={linkedinIcon}></i> <input {...linkedinUser} />
        </form>
        <form>
          <i className={youtubeIcon}></i> <input {...youtubeUser} />
        </form>
        <a onClick={sendUserSocial} className="text-blue">
          Save
        </a>
      </div>
    </section>
  );
};

export default SocialSettings;
