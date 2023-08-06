import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const AlertSuccess = ({ message }) => {
  const notify = () => toast.success(message);

  useEffect(() => {
    const unsub = notify;

    return unsub;
  }, [message]);
  return <Toaster />;
};

const AlertError = ({ message }) => {
  const [error, setError] = useState(message);
  const [change, setChange] = useState(true);
  const notify = () => toast.error(error);
  useEffect(() => {
    const unSub = () => {
      notify();
      if (message) {
        setError(change && message);
        setChange(!change);
      }
      return unSub;
    };
    unSub();
  }, [message]);

  return <Toaster />;
};

export { AlertSuccess, AlertError };
