import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import Accueil from "./pages/MenuPrincipal/component/Accueil";

function App() {
  return (
    <>
      <Outlet />
      <Accueil />
    </>
  );
}

export default App;
