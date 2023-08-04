import React from "react";
import style from "../../../css/pages/home.module.css";
import { classesTasks } from "./classNames/HomeClassNames";
import { useSelector, useDispatch } from "react-redux";
import { DelTask, SelectTask } from "../../../redux/actionMethod";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const bodyMode = useSelector((state) => state.modeNow);
  const dispatch = useDispatch();

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

        {tasks.map((task, index) => {
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
                <p className={`${line ? style.line : ""} text-gray`}>{text}</p>
              </div>
              <i
                className={`${line ? style.line : ""} ${classThree}`}
                onClick={() => DeleteTask(index)}
              ></i>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tasks;
