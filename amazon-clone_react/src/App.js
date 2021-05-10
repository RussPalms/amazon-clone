import React, { useEffect, dispatch } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import { auth } from "./firebase";

function App() {

  // this is to set a listener to Firebase so that our React app knows that user is
  // authenticated and update the state in the reducer
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
  });

  return (
    <div className="app">
      {/* We need to wrap the entire app into the Router component, so that every 
      component is a part of Router and has access to the Router. */}
      <Router>
        {/* The switch specifies that the components beneath it are to be rendered only under 
        certain routes. So if a route is meant for “/”, you cannot see the information on 
        “/hello” route. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
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