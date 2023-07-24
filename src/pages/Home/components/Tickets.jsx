import React from "react";
import style from "../../../css/pages/home.module.css";
import { classesTickets } from "./classNames/HomeClassNames";
import TicketsData from "../data/TicketsData";

const Tickets = () => {
  const { classOne, classTwo, classThree } = classesTickets;
  return (
    <section className={`${style.tickets} ${classOne}`}>
      <h1 className={classTwo}>Tickets Statistics</h1>
      <p className={classThree}>Everything About Support Tickets</p>
      <div className={style.ticks}>
        {TicketsData.map((ticket, index) => {
          const { icon, title, text } = ticket;
          return (
            <div key={index} className={`${style.ticket} mt-10`}>
              <i className={icon}></i>
              <h1 className="pb-5">{title}</h1>
              <p className="text-gray">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tickets;
