import React, { Component } from "react";

class forgotpassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };

    sendCode = (event) => {
      this.setState({ email: event.target.value });
    };
  }
  render() {
    return (
      <form>
        <input type="text" placeholder="Email" value={this.state.email} />

        <button id="getPass" onClick={sendCode}>
          Send
        </button>
      </form>
    );
  }
}

export default forgotpassword;
