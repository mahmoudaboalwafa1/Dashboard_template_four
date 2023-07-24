import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/main.css";
import "./css/all.min.css";
import "./css/framework.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
