import React from "react";
import { useSelector } from "react-redux";

const NotificationArea = () => {
  const notifications = useSelector((state) => state.Notifications);
  return (
    <ul>{notifications.length > 0 ? notifications : "No Notifications Now"}</ul>
  );
};

export default NotificationArea;
