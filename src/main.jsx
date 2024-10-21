import { useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, Landing } from "./pages";
import BuildPage from "./pages/BuildPage";

const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      children: [
        {
          index: true,
          element: <Landing/>,
        },
        {
          path: "/new-build",
          element: <BuildPage/>
        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
