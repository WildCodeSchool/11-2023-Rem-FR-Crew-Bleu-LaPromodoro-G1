import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import App from "./App";
import Accueil from "./pages/MenuPrincipal/component/Accueil";
import Niveau1 from "./pages/Niveau1/components/Niveau1";
import Niveau2 from "./pages/Niveau2/components/Niveau2";
import Niveau3 from "./pages/Niveau3/components/Niveau3";
import Niveau4 from "./pages/Niveau4/components/Niveau4";
import Niveau5 from "./pages/Niveau5/components/Niveau5";
import FinalPage from "./pages/FinalPage/components/FinalPage";
import YesPage from "./pages/FinalPage/components/YesPage";
import NoPage from "./pages/FinalPage/components/NoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/niveau1",
    element: <Niveau1 />,
  },
  {
    path: "/niveau2",
    element: <Niveau2 />,
  },
  {
    path: "/niveau3",
    element: <Niveau3 />,
  },
  {
    path: "/niveau4",
    element: <Niveau4 />,
  },
  {
    path: "/niveau5",
    element: <Niveau5 />,
  },
  {
    path: "/pagefinale",
    element: <FinalPage />,
  },
  {
    path: "/cimetiere",
    element: <YesPage />,
  },
  {
    path: "/asile",
    element: <NoPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
