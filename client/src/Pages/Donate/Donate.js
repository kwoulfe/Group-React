import React from 'react';
import API from "./../utils/API";


class Donate extends React.Component {
  state = {
    users: {},
    name: "",
    email: "",
    synopsis: "",
    image: "",
    goalAmount: "",
    donationAmount: "",
    // donationAdded: ""
  };

  componentDidMount() {
    // console.log("~~~~compoenet mounted~~~~")
    this.getUser(); // match.params.user to get the id
  }

  getUser = () => { // recieve user id as parameter
    // console.log("~~~~getuser CLIENT was called~~~~")

    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ users: res.data, name: "", email: "", synopsis: "", image: "", goalAmount: "", donationAmount: "" }))

      .catch(err => console.log(err));

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   // if (this.state.title && this.state.author) {
  //   API.updateDonation({
  //     donationAmount: this.state.donationAmount + this.state.donationAdded
  //   })
  //     .then(this.getUser(res))
  //     .catch(err => console.log(err));
  //   // }
  // };


  render() {
    return (
      <div>
        {/* Jumbotron */}
        <div className="jumbotron text-center">
          <div className="row">
            <div className="card col-md-12">
              <h1 className="h1-reponsive mb-3 font">
                <strong>Donate to this Project:</strong>
              </h1>

              <div className="row">
                <h1 className="h1-reponsive mb-3 font">
                  <strong>{this.state.users.name}</strong>
                </h1>
                <p className="h1-reponsive mb-3 font">
                  <strong>Project Name Small Summary: {this.state.users.synopsis}</strong>
                </p>

                <div className="row col-md-3">
                  <p>Donation Goal: {this.state.users.goalAmount}</p>
                </div>
                <div className="col-md-3">
                  <p>Current Donation Level: {this.state.users.donationAmount}</p>
                </div>

                <form>
                  <label htmlFor="defaultFormContactNameEx" class="grey-text">
                    Amount
          </label>
                  <input
                    type="text"
                    value={this.state.donationAdded}
                    onChange={this.handleInputChange}
                    id="defaultFormContactNameEx"
                    className="form-control"
                  />

                  <br />

                  <label htmlFor="defaultFormContactEmailEx" class="grey-text">
                    Paypal or CC #
          </label>
                  <input
                    type="email"
                    id="defaultFormContactEmailEx"
                    className="form-control"
                  />
                </form>

                <div className="text-center mt-4">
                  <a href="/thankyou">
                    {/* disabled={!(this.state.author && this.state.title)} set requirments for fields */}
                    <button class="btn btn-outline-warning" type="submit"
                      onClick={this.handleFormSubmit}>
                      Submit<i class="fa fa-paper-plane-o ml-2" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Donate;
