import img1 from "../utils/imagess/images.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOlnineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //Selector
  const cartItems = useSelector((store) => store.cart.items);

  console.log("its cartitems", cartItems);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="imageh" src={img1} />
      </div>
      <div className="nav-items">
        <ul className="ull">
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contacts">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart-({cartItems.length}Items)</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="loginbutton"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="logfromcontext">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
