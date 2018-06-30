import React from 'react';
import Cards from "./../components/Cards";
import API from "./utils/API";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    users: [],
    name: "",
    email: "",
    synopsis: "",
    image: ""
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, name: "", email: "", synopsis: "", image: "" })
        // console.log(users);
      )

      .catch(err => console.log(err));

  };

  render() {
    return (
      <div>
        {/* Jumbotron */}
        <div className="jumbotron text-center">
          <div className="card">
            <h1 className="h1-reponsive mb-3 font">
              <strong>Welcome to our Example Home page!</strong>
            </h1>
            <p className="lead font2">Explore new and developing apps!</p>
          </div>
        </div>

        <div className="container">
          {/* Project Cards */}
          <div className="row">
            {this.state.users.map(users => (
              <Cards
                id={users.id}
                key={users.id}
                image={users.image}
                name={users.name}
                email={users.email}
              >
                <img
                  src={users.image}
                  className="img-thumbnail"
                  alt=""
                />
                <div card-body="true">
                  <p>{users.name}</p>
                  <p>{users.email}</p>
                </div>
                <Link to={"/users/" + users._id}>
                  <button>Check Them Out</button>
                </Link>
              </Cards>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
