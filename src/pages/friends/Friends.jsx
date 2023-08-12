import React, { useEffect, useContext } from "react";
import Collection from "./../../components/Collection";
import style from "../../css/pages/friends.module.css";
import FriendsClasses from "./classNames/FriendsClasses";
import RequireAuth from "../Regiester/RequireAuth";
import { Link } from "react-router-dom";
import { setDoc, doc, onSnapshot, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AlertError, AlertLoading } from "../../components/MessageAlert";
import { FriendsContext } from "../../context/FriendsContext";

const Friends = () => {
  const { profileBox, iconsBox, iconPhone, iconEmail } = FriendsClasses;
  const { boxImg, iconSmile, iconCommit } = FriendsClasses;
  const { boxControl, boxInfo, btnInfo, btnDanger } = FriendsClasses;
  const {
    error,
    setError,
    userAuth,
    dataUsers,
    setDataUsers,
    loading,
    setLoading,
    dataFriend,
    HandleCurrentUser,
  } = useContext(FriendsContext);

  useEffect(() => {
    const unsub = () => {
      if (userAuth) {
        const userRef = doc(db, "AllUsers", "users");
        getDoc(userRef)
          .then((snapshot) => {
            const userData = snapshot?.data()?.user || [];

            const dataNewFriend = userData.map((user, index) =>
              user.name !== dataFriend.name ? user : []
            );

            const updatedUserData = [...dataNewFriend, dataFriend];

            if (userData?.length > 0) {
              updateDoc(userRef, { user: updatedUserData });
              onSnapshot(userRef, (snapshot) => {
                setDataUsers(snapshot.data().user);
              });
            } else {
              setDoc(userRef, { user: updatedUserData });
            }
            setLoading(false);
            setError("");
          })
          .catch((err) => {
            setLoading(false);
            setError(err.message);
          });

        onSnapshot(userRef, (data) => {
          setDataUsers(data?.data()?.user);
        });
      }
    };

    unsub();
    return unsub;
  }, [dataFriend, userAuth?.displayName]);

  return (
    <RequireAuth>
      <Collection MainTitle="Friends">
        <div className={`${style.profiles} pt-20`}>
          {dataUsers?.length &&
            dataUsers?.map((friend, index) => {
              const { photo, name, jop, friends } = friend;
              const { projects, files, join } = friend;
              return (
                <div key={index} className={profileBox}>
                  <div className="container">
                    <div className={iconsBox}>
                      <i className={iconPhone}></i>
                      <i className={iconEmail}></i>
                    </div>
                    <div className={boxImg}>
                      <img src={photo} alt={`friend-${index + 1}`} />
                    </div>
                    <ul className="pb-10">
                      <li className="pb-10">{name}</li>
                      <li className="text-gray">{jop}</li>
                    </ul>
                    <div className={`${style.bo} pt-20`}>
                      <i className={iconSmile}></i>
                      <span className="ps-10">Friends: {friends}</span>
                    </div>
                    <div className="pt-10">
                      <i className={iconCommit}></i>
                      <span className="ps-10">Projects: {projects}</span>
                    </div>
                    <div className={boxInfo}>
                      <i class="fa-solid fa-file"></i>
                      <span className="ps-10">Files :{files}</span>
                    </div>
                    <div className={boxControl}>
                      <div className={style.joined}>
                        <p className="text-gray">{join}</p>
                      </div>
                      <div className={style.btns}>
                        <Link
                          to={`/friends/${name}`}
                          className={btnInfo}
                          href="#"
                          onClick={() => HandleCurrentUser(index)}
                        >
                          Profile
                        </Link>
                        <a className={btnDanger} href="#">
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {error && <AlertError message={error} />}
        {loading && <AlertLoading message={loading} />}
        <></>
      </Collection>
    </RequireAuth>
  );
};

export default Friends;
