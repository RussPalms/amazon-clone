import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      {/* We need to wrap the entire app into the Router component, so that every 
      component is a part of Router and has access to the Router. */}
      <Router>
        {/* The switch specifies that the components beneath it are to be rendered only under 
        certain routes. So if a route is meant for “/”, you cannot see the information on 
        “/hello” route. */}
        <Switch>
          <Route path="/">
            {/* Remember you place Navbar before the Home component, because the 
            Amazon Navbar is always at the top. */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;