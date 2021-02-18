import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import register from "./pages/register/register";
import forgotpassword from "./components/forgotpassword/forgotpassword";


//qa comment
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="*" component={NotFound} />
        <Route path="/register" component={register} />
        <Route path="/forgotPassword" component={forgotpassword} />
      </Switch>
    );
  }
}

export default App;
