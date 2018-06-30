import React from 'react';
import API from "./utils/API";

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
    console.log("rendering...")
    return (
      <div>
        {/* Jumbotron */}
        <div className="jumbotron text-center">
          <div className="row">
            <div className="card col-md-9">
              <h1 className="h1-reponsive mb-3 font">
                <strong>{this.state.users.name}</strong>
              </h1>
              <h2>
                <strong>{this.state.users.email}</strong>
              </h2>
              <img alt={this.state.users.name} src={this.state.users.image} />
            </div>

            <div className="card col-md-3">
              <h1 className="h1-reponsive mb-3 font">
                <strong>Project details here: {this.state.users.synopsis}</strong>
              </h1>

              <p>blah blah blah</p>
              <p>blah blah blah 2</p>
              <p>blah blah blah 3</p>

              <a href="/donate">
                <button>Donate</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Project;
