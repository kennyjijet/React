import React, { Component } from "react";
class MyClass extends Component {
  render() {
    let names = ["Jake", "Jon", "Thruster"];
    var peopleToReturn = [];
    const peopleList = () => {
      for (let i = 0; i < names.length; i++) {
        peopleToReturn.push(<li>{names[i]}</li>);
      }
      return peopleToReturn;
    };
    return <ol>{peopleList()}</ol>;
  }
}
export default MyClass;
