import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Niveau1 from "./pages/Niveau1/components/Niveau1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu-principal",
    // element: </>
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
    path: "/cimetiere",
    // element: </>
  },
  {
    path: "/asile",
    // element: </>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
