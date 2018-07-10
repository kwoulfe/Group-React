import React from 'react';
// import Navbar from '../../Components/NavBar';
// import Cards from '../../Components/Cards';
// import Footer from '../../Components/Footer';
// import Carousel from '../../Components/Carousel';
// import cards from '../../cards.json';
import './Project.css';
import API from '../utils/API';
import { Link } from "react-router-dom";
import CommentWindow from '../../Components/CommentWindow/CommentWindow';
import CommentForm from '../../Components/CommentForm/CommentForm';

class Project extends React.Component {
  state = {
    users: {},
    comments: []
  };

  componentDidMount() {
    // console.log("~~~~compoenet mounted~~~~")
    this.getUser(); // match.params.user to get the id
    this.loadPosts();
  }

  getUser = () => {
    // recieve user id as parameter
    // console.log("~~~~getuser CLIENT was called~~~~")

    API.getUser(this.props.match.params.id)
      .then(res =>
        this.setState({
          users: res.data,

        })
      )

      .catch(err => console.log(err));
  };

  handleCommentSubmit = (author, text) => {
    if (!text || !author) {
      return alert("Must include both a comment and an anonymous username in order to post!");
    }
    API.createPost({ author, text, projectId: this.props.match.params.id })
      .then(res => {
        this.loadPosts();

      })
      .catch(err => console.log(err));;

    this.setState({ author: '', text: '' });
  };

  loadPosts = () => {
    API.getPosts(this.props.match.params.id)
      .then(
        res =>
          this.setState({
            comments: res.data

          })
        // console.log(comments);
      )

      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <div className="row devHub-carousel">
              <div className="carousel col-sm-7">
                {/* --carousel-- */}
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active ">
                      <img
                        className="d-block w-100"
                        src={this.state.users.image1}
                        alt={this.state.users.projectName}
                      />
                    </div>
                    <div className="carousel-item">
                      <div className="carousel-item active ">
                        <img
                          className="d-block w-100"
                          src={this.state.users.image2}
                          alt={this.state.users.projectName}
                        />
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carousel-item active ">
                        <img
                          className="d-block w-100"
                          src={this.state.users.image3}
                          alt={this.state.users.projectName}
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <h1 className="h1-reponsive mb-3 font">
                  <strong>{this.state.users.name}</strong>
                </h1>
                <h2>
                  <strong>{this.state.users.email}</strong>
                  <strong>github: {this.state.users.githubLink}</strong>
                </h2>
                <h2>
                  <strong>Donation Goal: ${this.state.users.donationGoal}</strong>
                </h2>
                <h2>
                  <strong>Current Donation Level: ${this.state.users.donationCurrent}</strong>
                </h2>
                <h2>
                  <strong>Reason Donation Requested: {this.state.users.reasonForDonation}</strong>
                  <strong>What Donation will be used for: {this.state.users.donationUsedFor}</strong>
                </h2>
                <h1 className="h1-reponsive mb-3 font">
                  <strong>{this.state.users.projectName}</strong>
                  <strong>Project details here: {this.state.users.synopsis}</strong>
                </h1>
                <Link to={"/donate/" + this.state.users._id}>
                  <button>Donate</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Comment area testing */}
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <CommentWindow comments={this.state.comments} />
            </div>
            <div className="col-md-4">
              <CommentForm projectId={this.props.match.params.id} handleSubmit={this.handleCommentSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
