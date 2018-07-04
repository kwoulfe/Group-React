import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Jumbotron from '../../Components/Jumbotron';
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
            <div>

                <div className="jumbotron">
                    <div className="container">
                        <div className='row devHub-carousel'>
                            <div className='carousel col-sm-7'>
                                <Carousel />
                            </div>
                            <h1 className="display-4 col-sm-4 tagline">Welcome to DevHub!</h1>
                            <div className="container-1">
                                <p className="lead">Make your dream a reality</p>
                                <a className="btn btn-primary btn-md butt" href="#" role="button">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Project;