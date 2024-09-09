import React from "react";

class UserClass extends React.Component {
  constructor() {
    super();

    // this.state = {
    //   count: 0,
    //   count2: 1000,
    //   //if more state variable and we want upate only some it will only upddate that varibale that w want
    // };
    this.state = {
      userInfo: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mohdathar01");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    //destructuring  props in class based comp below

    // const { count, count2 } = this.state;

    return (
      <div className="usercard">
        <h2>this is from class based compoenent</h2>
        {/* <h2>count={count}</h2>

        <h2>count2={count2}</h2> */}

        {/* <h2>Name:{this.props.name}</h2> */}
        <h2>Name:{this.state.userInfo.login}</h2>

        {/* <h3>Location:{this.props.location}</h3> */}
        {/* <h3>Location:{location}</h3> */}

        <h4>Contact:+917088322825</h4>
        <h4>Github:https://github.com/mohdathar01/</h4>
      </div>
    );
  }
}

/*
Rendering life cycle 
1. parent contructor is render
2.parent render is called
if child comp then
   --child life cycle method is called 
     --child contructor
     --child render methid called 
     
if another child comp it will render 
when child component render successfully then

<--DOM UPDATED -IN SINGLE BATCH>
first child componentdidmount will be called
 if found second child componentdidmount will be called
and in last the parent componetdidmount will be called
    
*/
export default UserClass;
