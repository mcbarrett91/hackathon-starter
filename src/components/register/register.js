import React from "react";
import { withAsyncAction } from "../../redux/HOCs";

class register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return <div></div>;
  }
}

export default withAsyncAction("register","all")( register );
