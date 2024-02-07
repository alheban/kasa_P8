import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import About from "./components/pages/About.jsx";
import Home from "./components/pages/Home.jsx";
import Layout from "./components/pages/Layout.jsx";
import LogementSingle from "./components/pages/LogementSingle.jsx";
import products from "/public/data.json";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },

      {
        path: "logement/:id",
        element: <LogementSingle />
      },
      {
        path: "*",
        element: <ErrorPage />
      },
    ],
  },
]);


function App () {
  return (
    <RouterProvider router={router} />
  )
}

export default App