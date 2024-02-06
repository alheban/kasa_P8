
import ErrorPage from "./components/pages/ErrorPage.jsx";
import About from "./components/pages/About.jsx";
import Home from "./components/pages/Home.jsx";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Single from "./components/pages/Single.jsx";
import Layout from "./components/pages/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/logement/:id",
        element: <Single />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);



export function App () {
  return <>
    <RouterProvider router={router} />
  </>
}

export default App