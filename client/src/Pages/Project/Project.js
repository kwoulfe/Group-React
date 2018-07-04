import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Cards from '../../Components/Cards';
import Footer from '../../Components/Footer';
import Carousel from '../../Components/Carousel';
import cards from "../../cards.json";
import './Project.css';
import API from "../utils/API";

class Project extends React.Component {
    state = {
        users: {},
        name: "",
        email: "",
        synopsis: "",
        image: ""
    };

    componentDidMount() {
        // console.log("~~~~compoenet mounted~~~~")
        this.getUser(); // match.params.user to get the id
    }

    getUser = () => { // recieve user id as parameter
        // console.log("~~~~getuser CLIENT was called~~~~")

        API.getUser(this.props.match.params.id)
            .then(res => this.setState({ users: res.data, name: "", email: "", synopsis: "", image: "" }))

            .catch(err => console.log(err));

    };
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className='row devHub-carousel'>
                        <div className='carousel col-sm-7'>
                            {/* --carousel-- */}
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active ">
                                        <img className="d-block w-100" src={this.state.users.image} alt={this.state.users.name} />
                                    </div>
                                    <div className="carousel-item">
                                        <div className="carousel-item active ">
                                            <img className="d-block w-100" src={this.state.users.image} alt={this.state.users.name} />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="carousel-item active ">
                                            <img className="d-block w-100" src={this.state.users.image} alt={this.state.users.name} />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            <h1>Project details: {this.state.users.synopsis}</h1>
                            {/* <div className="container-1">
                                <p className="lead">Make your dream a reality</p>
                                <a className="btn btn-primary btn-md butt" href="#" role="button">Learn more</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;