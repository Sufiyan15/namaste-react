import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-lg font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name="First" location="Indore (Class)" />
      </div>
    );
  }
}

export default About;
