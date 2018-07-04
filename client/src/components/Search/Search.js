import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  state = {
    search: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    // Do something with your search state
    console.log(this.state.search);

    // reset your search state to ""
    this.setState({
      search: ''
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form className="form-inline">
        <div className="form-group mb-2">
          <input
            onChange={this.handleChange}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="search"
            value={this.state.search}
          />
          <button onClick={this.handleSubmit} className="btn" type="submit">
            S
          </button>
        </div>
      </form>
    );
  }
}

export default Search;
