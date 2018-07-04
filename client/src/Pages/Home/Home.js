import React, { Component } from 'react';
import './Home.css';
import Navbar from '../../Components/NavBar';
import Cards from '../../Components/Cards';
import API from '../utils/API';
import { Link } from 'react-router-dom';
// import Carousel from ".././Components/Carousel";
import Container from '../../Components/Container';
import Row from '../../Components/Row';
import cards from '../../cards.json';
import Title from '../../Components/Title';
import Project from '../../Pages/Project';
import Footer from '../../Components/Footer';
import Jumbotron from '../../Components/Jumbotron';

class Home extends Component {
  state = {
    users: [],
    name: '',
    email: '',
    synopsis: '',
    image: ''
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(
        res =>
          this.setState({
            users: res.data,
            name: '',
            email: '',
            synopsis: '',
            image: ''
          })
        // console.log(users);
      )

      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <Title />
        <Jumbotron />

        {/* // Map over this.state.friends and render a FriendCard component for each friend object */}
        <Container>
          <Row>
            {this.state.users.map(users => (
              <Cards
                id={users.id}
                key={users.id}
                image={users.image}
                name={users.name}
                email={users.email}
              >
                <img src={users.image} className="img-thumbnail" alt="" />
                <div card-body="true">
                  <p>{users.name}</p>
                  <p>{users.email}</p>
                </div>
                <Link to={'/users/' + users._id}>
                  <button>Check Them Out</button>
                </Link>
              </Cards>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
