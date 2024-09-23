import React from "react";
// import UserContext from "../utils/UserContext";
 

class UserClass extends React.Component {
  constructor() {
    super();

    
    this.state = {
      userInfo: {
        login:"M... A....",
        id:"0000000",
        avatar_url:"Loading Photo",


      },
    };
  }


  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mohdathar01");
    const json = await data.json();
    
    this.setState({
      userInfo: json,
    });

  }
  //when we leave the page componentwillunmount will called
  // componentWillUnmount(){
  //   console.log("component will unmount called");
  // }

  render() {
    //destructuring  props in class based comp below

    // const { count, count2 } = this.state;
    const {login,id,avatar_url}=this.state.userInfo;
     

    return (
      <div className="usercard">
        <h2>this is from class based component</h2>
        <div>
          LoggedIn User:
       {/* usecontext in class based component */}
       {/* <UserContext.Consumer>
        {({loggedInUser})=> <h1>{loggedInUser}</h1>}
       </UserContext.Consumer> */}

       </div>

        {/* <h2>count={count}</h2>

        <h2>count2={count2}</h2> */}

        {/* <h2>Name:{this.props.name}</h2> */}
        <img src={avatar_url} alt="" />
        <h2>Your Login Name:{login}</h2>
        <h2>Your Login Id:{id}</h2>

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
