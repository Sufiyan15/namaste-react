import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        login: "",
        avatar_url: "",
      },
    };
    // console.log(this.props.name + " Child Constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + " Child Component Did Mount");
    const res = await fetch("https://api.github.com/users/Sufiyan15");
    const data = await res.json();
    console.log(data);
    this.setState({
      userInfo: {
        name: data.name,
        location: data.location,
        login: data.login,
        avatar_url: data.avatar_url,
      },
    });
    // this.timer = setInterval(() => {
    //   console.log("Timer called");
    // }, 1000);
  }
  componentDidUpdate() {
    // console.log("Component Did Update");
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    // console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + " Child Render");
    const { name, location, login, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button> */}
        <img src={avatar_url} style={{ width: "200px" }} />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @{login}</h4>
      </div>
    );
  }
}

export default UserClass;
