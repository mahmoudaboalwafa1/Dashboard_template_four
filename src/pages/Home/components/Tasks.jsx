import React, { useState, useEffect } from "react";
import style from "../../../css/pages/home.module.css";
import { classesTasks } from "./classNames/HomeClassNames";
import { useSelector, useDispatch } from "react-redux";
import { AddTask, DelTask, SelectTask } from "../../../redux/actionMethod";
import { db } from "../../../firebase";
import {
  collection,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const bodyMode = useSelector((state) => state.modeNow);

  const dispatch = useDispatch();
  useEffect(() => {
    if (tasks.length > 0) {
      console.log("Yes Your Tasks Is Bagger Than 0");
      const tasksRef = doc(db, "tasks", "my_task");
      setDoc(tasksRef, { tasks: [...tasks] });
      onSnapshot(collection(db, "tasks"), (task) => {
        const item = task.docs.map((item) => item.data());
        dispatch(AddTask(item[0].tasks && item[0].tasks));
      });
    }
  }, [tasks]);

  const { classOne, classTwo, classThree } = classesTasks;
  const DeleteTask = (index) => {
    dispatch(DelTask(index));
  };

  const CheckTask = (taskSelect, index) => {
    dispatch(SelectTask(taskSelect, index));
  };

  return (
    <section id="tasks" className={`${style.tasks} ${classOne}`}>
      <div className="container">
        <h1 className="fs-25 center">Latest Tasks</h1>

        {tasks.length > 0 ? (
          tasks.map((task, index) => {
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
          <p className="text-gray mt-10">no tasks now</p>
        )}
      </div>
    </section>
  );
};

export default Tasks;
