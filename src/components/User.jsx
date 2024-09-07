import React from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  return (
    <div className="usercard">
      <h2>Count={count}</h2>
      <h2>Name: {name}</h2>
      <h3>Location:{location}</h3>
      <h4>Contact:+917088322825</h4>
      <h4>Github:https://github.com/mohdathar01/</h4>
    </div>
  );
};

export default User;
