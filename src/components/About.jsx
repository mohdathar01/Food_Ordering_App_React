import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  
  return (
    <div>
      <h1>About Us </h1>
      <h2>Its Me</h2>
      <User name={"Athar from props"} location={"uttar pradesh from props"} />
      <UserClass
        name={"Athar from props"}
        location={"uttar pradesh from props"}
      />
    </div>
  );
};

export default About;
