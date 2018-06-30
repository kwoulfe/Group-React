import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from "react-router-dom";
import { Wrapper } from "../../components/Wrapper";

class Home extends Component {
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
            <Wrapper>
              {this.state.users.length ? (
              <List>
                {this.state.users.map(book => (
                  <ListItem key={user._id}>
                    <Link to={"/users/" + user._id}>
                      <strong>
                        {user.name} {user.email}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
              ):}
            </Wrapper>

    );
  }
}

export default Home;