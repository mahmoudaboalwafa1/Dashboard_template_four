import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const AlertSuccess = ({ message }) => {
  const id = "id";
  const notify = () => toast.success(message, { id });

  notify();
  return message && <Toaster />;
};

const AlertError = ({ message }) => {
  const id = "id";

  const notify = () => toast.error(message, { id });

  notify();
  return message && <Toaster />;
};

const AlertLoading = ({ message }) => {
  const id = "id";

  const notify = () => toast.loading(message, { id });

  notify();

  return <Toaster />;
};

export { AlertSuccess, AlertError, AlertLoading };
