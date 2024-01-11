import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import BulleNaration from "./pages/BulleNaration/component/BulleNaration";

function App() {
  return (
    <>
      <Outlet />
      <BulleNaration />
    </>
  );
}

export default App;
