import React from "react";
import ReactDOM from "react-dom/client";  // Corrected this line
import img1 from "./images.png"
import chknbryn from "./chicken-biryani.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img  className="imageh" src= {img1} />
            </div>
            <div className="nav-items">
                <ul className="ull">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">

            <div className="search">
                <h4>Search</h4>
                <input type="text" placeholder="search here" />

                 
            </div>
        </div>
    )
}
const RestaurentCard=()=>{
    return(
        <div className="RestaurentCard">
            <div className="img-container-res-card"><img className="img-container-res-card2" src={chknbryn} alt="" /></div>
            <div className="res-name-container"><h4>Asif Restaurent & Sweets</h4></div>
            <div className="Rating">✨5 Star </div>
            <div></div>
            
        </div>
    )
}

const RestaurentContainer=()=>{
    return(
        <div className="RestaurentContainer">
<RestaurentCard/>

        </div>
    )
}

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
