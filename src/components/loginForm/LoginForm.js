import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import register from "../../pages/register/register";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signUp = (event) => {
    this.setState({
      username: event.target.value,
      password: event.target.value,
    });
  };

  reg = (event) => {
    console.log("button clicked");
  };

  render() {
    if (this.reg) {
      <div>{register}</div>;
    }
    const { loading, error } = this.props;
    return (
      <div className="LoginForm">
        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={loading}>
            Login
          </button>
          <Link to="profile/register" onClick={this.reg}>
            Sign up
          </Link>
          <Link to="/forgetPassword">Forget Password?</Link>
        </form>

        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
