import React from "react";

const Footer = () => {
  return (
    <div className="footerdiv">
      <div className="divofftr">
        <h2>Swiggy</h2>
        <p>© 2024 Bundl Technologies Pvt. Ltd</p>
      </div>
      <div className="divofftr">
        <h2>Company</h2>

        <ul>
          <li>About</li>
          <li>Career</li>
          <li>Team</li>
          <li>Swiggy One </li>
          <li>Swiggy Mart</li>
          <li>Swiggy Genie</li>
        </ul>
      </div>
      <div>
        <div className="divofftr">
          <h2>Contact Us</h2>
          <p>Help & Support</p>
          <p>Partner with us</p>
          <p>Ride with us</p>
        </div>
        <div>
          <h2>Legal</h2>
          <p>Terms & Conditions</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
          <p>Investor Relations</p>
          <p></p>
        </div>
      </div>
      <div className="divofftr">
        <h2>Deliver to</h2>
        <p>Bangalore</p>
        <p>Gurgaon</p>
        <p>Hyderabad</p>
        <p>Delhi</p>
        <p>Mumbai</p>
        <p>Pune</p>
        <option value="Cities">589 Cities</option>
      </div>
    </div>
  );
};

export default Footer;
