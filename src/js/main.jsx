import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../styles/index.css";

import SecondsCounter from "./components/SecondsCounter";

let seconds = 0;

const render = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <SecondsCounter seconds={seconds} />
    </React.StrictMode>
  );
};

render();
setInterval(() => {
  seconds++;
  render();
}, 1000);
