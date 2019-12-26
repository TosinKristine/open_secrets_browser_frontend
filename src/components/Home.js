import React, { Component } from "react";
import LogIn from "./LogIn";
import CreateNewUser from "./CreateNewUser";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      loggedInEmail: "",
      createNewAccount: false,
      newUserName: "",
      newUserEmail: ""
    };
  }

  // renderCreateAccount = () => {
  //   this.setState({
  //     createNewAccount: true
  //   });
  // };

  handleLoginEmailChange = e => {
    this.setState({ loggedInEmail: e.target.value });
  };
  // handleCreateUserName = e => {
  //   this.setState({ newUserName: e.target.value });
  // };
  // handleCreateUserEmail = e => {
  //   this.setState({ newUserEmail: e.target.value });
  // };

  // handleSubmitCreateUser = e => {
  //   e.preventDefault();
  //   console.log("submit new user!");
  // };

  // checkLoggedIn = () => {
  //   if (this.state.loggedInForm) {
  //     return (
  //       <form onSubmit={this.handleSubmitLogIn}>
  //         <h2>Log in to an existing account:</h2>
  //         <label>
  //           Your email:
  //           <input
  //             type="text"
  //             name="email"
  //             value={this.state.loggedInEmail}
  //             onChange={this.handleLoginEmailChange}
  //           ></input>
  //         </label>
  //         <input type="submit" value="Log In"></input>
  //       </form>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h3 onClick={this.renderCreateAccount}>
  //           No account? Create one here
  //         </h3>
  //       </div>
  //     );
  //   }
  // };

  // checkForNewUser = () => {
  //   if (this.state.createNewAccount) {
  //     return (
  //       <form onSubmit={this.handleSubmitCreateUser}>
  //         <h2>Create New User:</h2>
  //         <label>
  //           Your name:
  //           <input
  //             type="text"
  //             name="name"
  //             value={this.state.newUserName}
  //             onChange={this.handleCreateUserName}
  //           ></input>
  //         </label>
  //         <label>
  //           Your email:
  //           <input
  //             type="text"
  //             name="email"
  //             value={this.state.newUserEmail}
  //             onChange={this.handleCreateUserEmail}
  //           ></input>
  //         </label>
  //         <input type="submit" value="Create Account"></input>
  //       </form>
  //     );
  //   }
  // };

  handleLoggedIn = e => {
    this.setState({ loggedIn: e });
  };

  handleLoggedInEmail = e => {
    this.setState({ loggedInEmail: e });
  };

  render() {
    return (
      <div>
        <h1>Open Secrets Browser</h1>
        <LogIn
          loggedIn={this.handleLoggedIn}
          loggedInEmail={this.handleLoggedInEmail}
        ></LogIn>
        {/* <CreateNewUser></CreateNewUser> */}
      </div>
    );
  }
}

export default Home;
