import React, { useState, useEffect } from "react";
import style from "../../../css/pages/home.module.css";
import { classesTasks } from "./classNames/HomeClassNames";
import { useSelector, useDispatch } from "react-redux";
import { DelTask, SelectTask } from "../../../redux/actionMethod";
import {
  setDoc,
  onSnapshot,
  doc,
  collection,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const [allTasks, setAllTasks] = useState([]);

  const bodyMode = useSelector((state) => state.modeNow);
  const dispatch = useDispatch();

  const { classOne, classTwo, classThree } = classesTasks;
  const DeleteTask = (index) => {
    dispatch(DelTask(index));
    const taskRef = doc(db, "tasks", "my_tasks");
    getDoc(taskRef).then((yourTasks) => {
      const tasksRes = yourTasks
        .data()
        .tasks.filter((task, id) => index != id && task);
      updateDoc(taskRef, { tasks: tasksRes });
    });
  };
  const CheckTask = (taskSelect, index) => {
    const taskRef = doc(db, "tasks", "my_tasks");
    dispatch(SelectTask(taskSelect, index));
    const check = allTasks.filter((task, id) =>
      index === id ? { ...task, line: !taskSelect } : { ...task }
    );
    updateDoc(taskRef, { tasks: check });
  };

  useEffect(() => {
    const unsub = () => {
      if (tasks.length > 0) {
        const tasksRef = doc(db, "tasks", "my_tasks");
        setDoc(tasksRef, { tasks: tasks });
      }
    };

    return unsub;
  }, [tasks, allTasks]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "tasks"), (tasksRes) => {
      const taskData = tasksRes.docs.map((task) => task.data());
      setAllTasks(taskData);
    });
    return unsub;
  }, [allTasks]);

  return (
    <section id="tasks" className={`${style.tasks} ${classOne}`}>
      <div className="container">
        <h1 className="fs-25 center">Latest Tasks</h1>

        {allTasks[0]?.tasks?.length > 0 ? (
          allTasks[0].tasks.map((task, index) => {
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
