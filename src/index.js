import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { EasyGameMode } from "./components/context/gameModeContext";
/* import EasyGameMode from "./components/context/gameModeContext"; */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EasyGameMode>
      <RouterProvider router={router}></RouterProvider>
    </EasyGameMode>
  </React.StrictMode>,
);
