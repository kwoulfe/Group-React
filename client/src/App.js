import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Cards from './components/Cards';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Cards />
      </div>
    )
  }
}

export default App;
