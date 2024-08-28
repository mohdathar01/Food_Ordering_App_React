import img1 from "../utils/imagess/images.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="imageh" src={img1} />
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
  );
};
export default Header;
