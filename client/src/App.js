import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from './Component/Navbar';
import Cards from './Component/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Cards />
      </div>
    );
  }
}

export default App;
