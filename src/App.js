import React from "react";
import ReactDOM from "react-dom/client";  // Corrected this line
// import img1 from "./images.png"
// import chknbryn from "./chicken-biryani.jpg";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurentContainer from "./components/RestaurantContainer";
 


 





const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
            <RestaurentContainer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));  // This is correct now
root.render(<AppLayout />);