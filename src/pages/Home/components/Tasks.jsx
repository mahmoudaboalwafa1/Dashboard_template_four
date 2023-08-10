import React, { useState, useEffect } from "react";
import style from "../../../css/pages/home.module.css";
import { classesTasks } from "./classNames/HomeClassNames";
import { useSelector, useDispatch } from "react-redux";
import { DelTask, SelectTask } from "../../../redux/actionMethod";
import { setDoc, onSnapshot, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const [allTasks, setAllTasks] = useState([]);
  const [dataUser, setDataUser] = useState({});
  const userAuth = useSelector((state) => state.UserAuth.user);
  const refdb = doc(db, "dataUser", userAuth.displayName);
  const bodyMode = useSelector((state) => state.modeNow);
  const dispatch = useDispatch();

  const { classOne, classTwo, classThree } = classesTasks;
  const DeleteTask = (index) => {
    dispatch(DelTask(index));
    const taskRef = doc(db, "dataUser", userAuth.displayName);

    getDoc(taskRef).then((yourTasks) => {
      const tasksRes = setDataUser(yourTasks)
        .data()
        .tasks.filter((task, id) => index != id && task);

      updateDoc(taskRef, { ...allData, tasks: tasksRes });
    });
  };

  const CheckTask = (taskSelect, index) => {
    const taskRef = doc(db, "dataUser", userAuth.displayName);
    dispatch(SelectTask(taskSelect, index));
    const check = allTasks.filter((task, id) =>
      index === id ? { ...task, line: !taskSelect } : { ...task }
    );
    updateDoc(taskRef, { tasks: check });
  };

  useEffect(() => {
    const unsub = () => {
      if (tasks.length > 0) {
        if (allTasks.length === 0) {
          setDoc(
            refdb,
            { ...dataUser, tasks: [...allTasks, ...tasks] },
            { merge: true }
          );
        } else {
          updateDoc(refdb, { ...dataUser, tasks: [...allTasks, ...tasks] });
        }
      }
      tasks.splice(0, tasks?.length);
    };

    unsub();
    return unsub;
  }, [tasks]);

  useEffect(() => {
    const unSub = onSnapshot(refdb, (yourTasks) => {
      const my_task = yourTasks?.data().tasks;
      console.log(yourTasks.data());
      if (my_task) {
        setAllTasks(my_task);
      }
    });

    return unSub;
  }, [tasks]);

  return (
    <section id="tasks" className={`${style.tasks} ${classOne}`}>
      <div className="container">
        <h1 className="fs-25 center">Latest Tasks</h1>

        {allTasks?.length > 0 ? (
          allTasks?.map((task, index) => {
            const { title, text, line } = task;

            return (
              <div key={index} className={`${style.task} ${classTwo}`}>
                <div
                  className={`${style.tasktext} pt-10`}
                  onClick={() => CheckTask(true, index)}
                >
                  <h1
                    className={`${
                      line == false
                        ? ""
                        : bodyMode.includes("DarkMode")
                        ? style.line_dark
                        : style.line
                    } pb-5`}
                  >
                    {title}
                  </h1>
                  <p className={`${line ? style.line : ""} text-gray`}>
                    {text}
                  </p>
                </div>
                <i
                  className={`${line ? style.line : ""} ${classThree}`}
                  onClick={() => DeleteTask(index)}
                ></i>
              </div>
            );
          })
        ) : (
          <p className="text-gray pt-10">no tasks now</p>
        )}
      </div>
    </section>
  );
};

export default Tasks;
