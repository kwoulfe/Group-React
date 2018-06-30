import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Carousel from "./components/Carousel";
import Container from "./components/Container";
import Row from "./components/Row";
import cards from "./cards.json";
import Title from './components/Title';
import Project from './components/Project';
import Footer from './components/Footer';
import "./App.css";



class App extends Component {
  state = {
    cards
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />
        <Title />

        {/* // Map over this.state.friends and render a FriendCard component for each friend object */}
        <Container>
          <Row>
            {this.state.cards.map(project => (<Cards
              id={project.id}
              name={project.name}
              image={project.image}
              occupation={project.occupation}
              location={project.location}
            />
            ))}


          </Row>
        </Container>
        <Project />
        <Footer />

      </div>
    )
  }
}

export default App;
