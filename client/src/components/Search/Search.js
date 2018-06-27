import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Do something with your search state
        console.log(this.state.search);

        // reset your search state to ""
        this.setState({
            search: ""
        })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <form class="form-inline">
                <input onChange={this.handleChange} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name='search' value={this.state.search} />
                <button  onClick={this.handleSubmit} className="btn btn-primary" type="submit">Search</button>
            </form >
        )
    }
}

export default Search;