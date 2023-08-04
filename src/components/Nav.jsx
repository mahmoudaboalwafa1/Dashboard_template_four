import React, { useContext } from "react";
import NotificationArea from "./NotificationArea";
import { UserImg } from "../images/index";
import { ContextNavbar } from "../context/NavbarContext";
import NavbarClasses from "../components/classNames/NavClasses";
import { useSelector } from "react-redux";

const Nav = () => {
  const { navbar, alignCenter, iconSearch } = NavbarClasses[0];
  const { styleInput, accContainer, bellIcon } = NavbarClasses[0];
  const { mode, keyWord, showNotification } = useContext(ContextNavbar);
  const { changeMode, ShowNotificationArea } = useContext(ContextNavbar);
  const { handleShowSignout, showSignout, handleSignOut } =
    useContext(ContextNavbar);
  const userAuth = useSelector((state) => state.UserAuth.user);
  return (
    <nav className={navbar}>
      <form
        style={{ border: !userAuth && 0 }}
        className={userAuth && alignCenter}
      >
        {userAuth && <i className={iconSearch}></i>}
        {userAuth && <input className={styleInput} {...keyWord} />}
      </form>

      <div className={accContainer}>
        {userAuth && (
          <input
            type="checkbox"
            checked={mode}
            onChange={changeMode}
            className="darkmode"
          />
        )}
        {userAuth && (
          <i onClick={ShowNotificationArea} className={bellIcon}></i>
        )}
        {showNotification && <NotificationArea />}
        <img
          src={userAuth && userAuth.photoURL ? userAuth.photoURL : UserImg}
          onClick={handleShowSignout}
        />
        {showSignout && (
          <div className="signout" onClick={handleSignOut}>
            signout
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
