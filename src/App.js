import React, { lazy, Suspense, useEffect } from "react";
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
import UserContext from "./utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./Footer";

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
  //authentication
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Mohd Athar",
    };
    setUserName(data.name);
  }, []);

  return (
    //if we want to provide this override value loggedinuser for whole parts or where we used context we can like below
    //if we want to provide nested  copy below provider and change the data menas username
    //provider is from react toolkit
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          {/* if we provide value only header uncomment just below line ,for other parts of app the loggedinuser value will be usercontext component value that is "Default user" */}
          {/*   </UserContext.Provider> */}
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")); // This is correct now
root.render(<RouterProvider router={appRouter} />);
