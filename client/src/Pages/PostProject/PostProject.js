import React from 'react';
import API from '../utils/API';


class PostProject extends React.Component {

  state = {
    users: {},
    name: "",
    projectName: '',
    githubLink: "",
    email: "",
    synopsis: "",
    image1: "",
    image2: "",
    image3: "",
    donationGoal: "",
    reasonForDonation: '',
    donationUsedFor: '',
    donationCurrent: 0,
  };

  componentDidMount() {
    // console.log("~~~~compoenet mounted~~~~")
  }

  // createUser = () => { // recieve user id as parameter
  //   // console.log("~~~~getuser CLIENT was called~~~~")

  //   API.newUser(res)
  //     .then(res => this.setState({ users: res.data, name: "", email: "", synopsis: "", image: "", donationGoal: "", donationCurrent: "" }))

  //     .catch(err => console.log(err));

  // };


  handleInputChange = event => {
    const { name, githubLink, email, synopsis, image1, image2, image3, donationGoal, projectName, reasonForDonation, donationUsedFor, value } = event.target;
    this.setState({
      [name]: value,
      [githubLink]: value,
      [email]: value,
      [projectName]: value,
      [synopsis]: value,
      [image1]: value,
      [image2]: value,
      [image3]: value,
      [donationGoal]: value,
      [reasonForDonation]: value,
      [donationUsedFor]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const userInfo = {
      name: this.state.users.name,
      githubLink: this.state.users.githubLink,
      email: this.state.users.email,
      projectName: this.state.users.projectName,
      synopsis: this.state.users.synopsis,
      image1: this.state.users.image1,
      image2: this.state.users.image2,
      image3: this.state.users.image3,
      donationGoal: this.state.users.donationGoal,
      reasonForDonation: this.state.users.reasonForDonation,
      donationUsedFor: this.state.users.donationUsedFor
    }

    API.newUser(userInfo)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));

    this.setState({
      name: "",
      projectName: '',
      githubLink: "",
      email: "",
      synopsis: "",
      image1: "",
      image2: "",
      image3: "",
      donationGoal: "",
      reasonForDonation: '',
      donationUsedFor: '',
      donationCurrent: '',
    });

  };


  render() {
    return (
      <div className="container">
        {/* Sign-up form */}
        <div className="jumbotron text-center">
          {/* <div className="card"> */}
          <h1 className="h1-reponsive mb-3 font">
            <strong>Project Post.</strong>
          </h1>
          <p className="lead font2">
            To Post a project to our page fill out the information below.
        </p>

          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Your name
          </label>
            <input
              type="text"
              value={this.state.users.name}
              onChange={this.handleInputChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Email
          </label>
            <input
              type="email"
              value={this.state.users.email}
              onChange={this.handleInputChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Github link (if applic)
          </label>
            <input
              type="text"
              value={this.state.users.githubLink}
              onChange={this.handleInputChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactEmailEx" class="grey-text">
              Image link 1
          </label>
            <input
              type="text"
              value={this.state.users.image1}
              onChange={this.handleInputChange}
              id="defaultFormContactEmailEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactEmailEx" class="grey-text">
              Image link 2
          </label>
            <input
              type="text"
              value={this.state.users.image2}
              onChange={this.handleInputChange}
              id="defaultFormContactEmailEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactEmailEx" class="grey-text">
              Image link 3
          </label>
            <input
              type="text"
              value={this.state.users.image3}
              onChange={this.handleInputChange}
              id="defaultFormContactEmailEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Project/App name
          </label>
            <input
              type="text"
              value={this.state.users.projectName}
              onChange={this.handleInputChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Summary of Project
          </label>
            <input
              type="text"
              value={this.state.users.synopsis}
              onChange={this.handleInputChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              requested Funding amount
          </label>
            <input
              type="number"
              value={this.state.users.donationGoal}
              onChange={this.handleInputChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Describe Why you are requesting funding
          </label>
            <input
              type="text"
              value={this.state.users.reasonForDonation}
              onChange={this.handleInputChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <label htmlFor="defaultFormContactNameEx" class="grey-text">
              Describe what funding is for
          </label>
            <input
              type="text"
              value={this.state.users.donationUsedFor}
              onChange={this.handleInputChange}
              id="defaultFormContactNameEx"
              class="form-control"
            />

            <br />

            <div className="text-center mt-4">
              <button class="btn btn-outline-grey" type="submit">
                Submit<i class="fa fa-paper-plane-o ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

};

export default PostProject;
