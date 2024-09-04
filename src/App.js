import React from "react";
import ReactDOM from "react-dom/client"; // Corrected this line
// import img1 from "./images.png"
// import chknbryn from "./chicken-biryani.jpg";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

import Error from "./components/Error";
import About from "./components/About";
import Contacts from "./components/Contacts";
import RestaurentContainer from "./components/RestaurantContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <RestaurentContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")); // This is correct now
root.render(<RouterProvider router={appRouter} />);
