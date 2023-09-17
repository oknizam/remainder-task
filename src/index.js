import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./App.scss";

const element = document.getElementById("app");
const root=createRoot(element);
root.render(<App />);