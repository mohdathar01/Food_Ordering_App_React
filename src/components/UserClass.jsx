import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    //destructuring  props in class based comp below
    const { name, location } = this.props;

    return (
      <div className="usercard">
        <h2>this is from class based compoenent</h2>

        {/* <h2>Name:{this.props.name}</h2> */}
        <h2>Name:{name}</h2>

        {/* <h3>Location:{this.props.location}</h3> */}
        <h3>Location:{location}</h3>

        <h4>Contact:+917088322825</h4>
        <h4>Github:https://github.com/mohdathar01/</h4>
      </div>
    );
  }
}
export default UserClass;
