import React, { useState, useEffect } from "react";
import Collection from "./../../components/Collection";
import style from "../../css/pages/friends.module.css";
import FriendsClasses from "./classNames/FriendsClasses";
import RequireAuth from "../Regiester/RequireAuth";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setDoc, doc, onSnapshot, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AlertError, AlertLoading } from "../../components/MessageAlert";

const Friends = () => {
  const { profileBox, iconsBox, iconPhone, iconEmail } = FriendsClasses;
  const { boxImg, iconSmile, iconCommit, iconNewspaper } = FriendsClasses;
  const [error, setError] = useState("");
  const { boxControl, boxInfo, btnInfo, btnDanger } = FriendsClasses;
  const projectsData = useSelector((state) => state.ProjectsData);
  const userAuth = useSelector((state) => state.UserAuth.user);
  const [dataUsers, setDataUsers] = useState([]);
  const [loading, setLoading] = useState("wait to loading users");
  const [dataFriend, setDataFriend] = useState({
    name: userAuth?.displayName,
    photo: userAuth?.photoURL,
    friends: 0,
    projects: projectsData?.length,
    files: 0,
    number: userAuth?.phoneNumber,
    email: userAuth?.email,
  });

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

            updateDoc(userRef, { user: updatedUserData });
            const unsubscribe = onSnapshot(userRef, (snapshot) => {
              setDataUsers(snapshot.data().user);
            });

            setLoading(false);
            setError("");
            return () => {
              unsubscribe();
            };
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
    console.log(dataFriend);

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
                          to={"/friends/adelsamy"}
                          className={btnInfo}
                          href="#"
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
