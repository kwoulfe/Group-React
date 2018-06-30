import React, { Component } from 'react';
import './App.css';
// import Navbar from './Component/Navbar';
// import Cards from './Component/Cards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Error from './pages/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Project from './components/Project';
import Donate from './pages/Donate';
import ThankYou from './pages/ThankYou';
import PostProject from './pages/PostProject';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/users/:id" component={Project} />
              <Route path="/donate" component={Donate} />
              <Route path="/thankyou" component={ThankYou} />
              <Route path="/post" component={PostProject} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
