import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Cards from './components/Cards';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Donate from "./components/Donate";



class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Navbar />
                    <Cards />
                </div>


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
                </div>
            </div >
        )
    }
}

export default App;
