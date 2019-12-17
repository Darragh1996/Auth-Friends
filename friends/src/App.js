import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import Friends from "./components/Friends";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Login} />
        <Route path="/friends" component={Friends} />
      </header>
    </div>
  );
}

export default App;
