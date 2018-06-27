import React, { Component } from "react";
import "./App.css";
<<<<<<< HEAD
<<<<<<< HEAD
import Navbar from './Component/Navbar';
import Cards from './Component/Cards';
=======
=======

>>>>>>> 1ae794569a488d250797bcc7f4cd021c7c4bfb6e
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Donate from "./components/Donate";
import ThankYou from "./components/ThankYou";


<<<<<<< HEAD
>>>>>>> c22f32b9100945abe0d20f6eca2a2801ffc29f34
=======
>>>>>>> 1ae794569a488d250797bcc7f4cd021c7c4bfb6e

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="App">
        <Navbar />
        <Cards />
      </div>
=======
=======


>>>>>>> 1ae794569a488d250797bcc7f4cd021c7c4bfb6e

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

<<<<<<< HEAD
>>>>>>> c22f32b9100945abe0d20f6eca2a2801ffc29f34
=======
>>>>>>> 1ae794569a488d250797bcc7f4cd021c7c4bfb6e
    );
  }
}

export default App;
