import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import App from "./App";
import Accueil from "./pages/MenuPrincipal/component/Accueil";
import Niveau1 from "./pages/Niveau1/components/Niveau1";
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
    // element: </>
  },
  {
    path: "/niveau3",
    // element: </>
  },
  {
    path: "/niveau4",
    // element: </>
  },
  {
    path: "/niveau5",
    // element: </>
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
