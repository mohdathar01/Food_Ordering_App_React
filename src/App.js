import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"; // Corrected this line
// import img1 from "./images.png"
// import chknbryn from "./chicken-biryani.jpg";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import About from "./components/About";
import Contacts from "./components/Contacts";
// import Grocery from "./components/Grocery";
import RestaurentContainer from "./components/RestaurantContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*many name of chunking
chunking
code splitting
lazy loading
Dynamic bundling
on demand loading
*/
/*when app size is big we should chunks it into diferent bundle called as bundling*/
const Grocery = lazy(() => import("./components/Grocery"));

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
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..🚀🚀</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurantsmenu/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")); // This is correct now
root.render(<RouterProvider router={appRouter} />);
