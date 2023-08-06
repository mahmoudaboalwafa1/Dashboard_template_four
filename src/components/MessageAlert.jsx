import React from "react";
import toast, { Toaster } from "react-hot-toast";

const AlertSuccess = ({ message }) => {
  const notify = () => toast.success(message);

  notify();
  return <Toaster />;
};

const AlertError = ({ message }) => {
  const notify = () => toast.error(message);

  notify();

  return <Toaster />;
};

export { AlertSuccess, AlertError };
