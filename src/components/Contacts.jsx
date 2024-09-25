import React from "react";

const Contacts = () => {
  return <div> 

     <h1 className="contactmaindiv">Contact us </h1>
     
      <form className="myform">
        <label htmlFor="" className="labelone">Name</label>
        <input type="text" className="inputoffromone"  placeholder="Name"/>
        <label htmlFor="" className="labeltwo">Message</label>
        <input type="text" className="inputoffromtwo"  placeholder="Message"/>
        <button className="submitbtnconatct">Submit</button>
      </form>
      
  </div>
};

export default Contacts;
