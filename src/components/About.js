import React from "react";
import FunctionComp from "./functionComp";
import ClassBasedcomp from "./classcomp";
import UserContext from "../Utils/UserContext";
const About = () => {
  return (
    <div>
      <FunctionComp />
      <h1>About</h1>
      <UserContext.Consumer>
        {(data)=><h1>{data.loggedInUser}</h1>}
      </UserContext.Consumer>
      <ClassBasedcomp name={"Yazhini React Developer(class)"}/>
      
    </div>
  );
};

export default About;
