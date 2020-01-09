import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Route, withRouter, Redirect } from "react-router-dom";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Login} />
        {/* <Route path="/friends" component={Friends} /> */}
        <PrivateRoute path="/friends" component={Friends} />
        <PrivateRoute path="/add-friend" component={AddFriend} />
      </header>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default withRouter(App);
