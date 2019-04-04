import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Work from "./pages/Work";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/projects" component={Work} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
