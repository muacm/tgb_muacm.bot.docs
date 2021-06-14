import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter, Link } from "react-router-dom";
import { Switch } from "react-router";
import React from "react";
import HomeComponent from "./Views/Home";
import DeveloperComponent from "./Views/Developers";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact component={HomeComponent} 
          />

          <Route
            path="/docs"
            exact component={HomeComponent}
          />

          <Route 
            path="/team"
            exact component={DeveloperComponent}
          />          
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App;