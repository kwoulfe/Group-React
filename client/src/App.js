import React, { Component } from "react";
import "./App.css";
<<<<<<< HEAD
import Navbar from './Component/Navbar';
import Cards from './Component/Cards';
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Donate from "./components/Donate";


>>>>>>> c22f32b9100945abe0d20f6eca2a2801ffc29f34

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Navbar />
        <Cards />
      </div>
=======

      <div>

        <Router >
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/donate" component={Donate} />
              <Route component={Error} />
            </Switch>
          </div>

        </Router>

      </div >

>>>>>>> c22f32b9100945abe0d20f6eca2a2801ffc29f34
    );
  }
}

export default App;
