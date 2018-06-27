import React, { Component } from "react";
import "./App.css";
import Navbar from './Component/Navbar';
import Cards from './Component/Cards';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Donate from "./components/Donate";
import ThankYou from "./components/ThankYou";


class App extends Component {
  render() {
    return (

      <div>

        <Router >
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/project" component={Project} />
              <Route path="/donate" component={Donate} />
              <Route path="/thankyou" component={ThankYou} />
              <Route component={Error} />
            </Switch>
          </div>

        </Router>

      </div >

    );
  }
}

export default App;
