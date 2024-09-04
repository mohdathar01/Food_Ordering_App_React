import React from "react";
import ReactDOM from "react-dom/client";  // Corrected this line
// import img1 from "./images.png"
// import chknbryn from "./chicken-biryani.jpg";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contacts from "./components/Contacts";
import RestaurentContainer from "./components/RestaurantContainer";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
 


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
            <RestaurentContainer/>
        </div>
    )
}

const  appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>
    },
    {
        path:"/about",
        element:<About/>
    },
      {
        path:"/contacts",
        element:<Contacts/>
    }


])

const root = ReactDOM.createRoot(document.getElementById("root"));  // This is correct now
root.render(<RouterProvider router={appRouter} /> );