import React from "react";
import { withAsyncAction } from "../../redux/HOCs";

function register(props) {
  return (
    <form id="reg-form" onSubmit={props}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={props.signUp}
        autoFocus
        required
        onChange={props.handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        vaule={props.signUp}
        required
        onChange={props.handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default register;
