import React, { useEffect } from "react";
import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // useEffect(() => {
  //   const callfn = getUserInfo();
  //   console.log("from functional componemt", callfn);
  // }, []);

  // async function getUserInfo() {
  //   const data = await fetch("https://api.github.com/users/mohdathar01");
  //   const json = await data.json();
  //   console.log(json);
  // }

  return (
    <div className="usercard">
      <h2>Count={count}</h2>
      <h2>count2={count2}</h2>
      <h2>Name: {name}</h2>
      <h3>Location:{location}</h3>
      <h4>Contact:+917088322825</h4>
      <h4>Github:https://github.com/mohdathar01/</h4>
    </div>
  );
};

export default User;
