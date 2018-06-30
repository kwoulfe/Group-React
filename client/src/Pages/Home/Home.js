import React, { Component } from "react";
import "./Home.css";
import Navbar from '../../Components/Navbar';
import Cards from '../../Components/Cards';
// import Carousel from ".././Components/Carousel";
import Container from "../../Components/Container";
import Row from "../../Components/Row";
import cards from "../../cards.json";
import Title from '../../Components/Title';
import Project from '../../Pages/Project';
import Footer from '../../Components/Footer';




class Home extends Component {
    state = {
        cards
    };
    render() {
        return (
            <div className="App">


                <Title />

                {/* // Map over this.state.friends and render a FriendCard component for each friend object */}
                <Container>
                    <Row>
                        {this.state.cards.map(project => (
                            <Cards
                                id={project.id}
                                name={project.name}
                                image={project.image}
                                occupation={project.occupation}
                                location={project.location}
                            />
                        ))}


                    </Row>
                </Container>


            </div>
        )
    }
}

export default Home;
