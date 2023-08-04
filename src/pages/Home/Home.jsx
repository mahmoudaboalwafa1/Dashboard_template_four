import React, { Fragment } from "react";
import Collection from "../../components/Collection";
import RequireAuth from "../Regiester/RequireAuth";
import { useSelector } from "react-redux";

import {
  Dashboard,
  Upload,
  Project,
  Reminders,
  Post,
  Social,
  Clients,
  Draft,
  Targets,
  Tickets,
  News,
  Tasks,
  Search,
} from "../index";
// Images Import

const Home = () => {
  const ShowHiddenWidgets = useSelector((state) => state.WidgetsData);
  const components = [
    <Draft />,
    <Targets />,
    <Tickets />,
    <News />,
    <Tasks />,
    <Search />,
  ];

  return (
    <RequireAuth>
      <Collection MainTitle="Dashboard" clients={<Clients />}>
        <Dashboard />
        {ShowHiddenWidgets.map((widget) => {
          return (
            widget.checked && (
              <Fragment key={widget.index}>
                {" "}
                {components[widget.index]}
              </Fragment>
            )
          );
        })}
        <Upload />
        <Project />
        <Reminders />
        <Post />
        <Social />
      </Collection>
    </RequireAuth>
  );
};

export default Home;
