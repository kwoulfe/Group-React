import axios from 'axios';

export default {
  // User API's
  getUsers: function() {
    return axios.get('/api/users');
  },
  getUser: function(id) {
    console.log('~~~~getuser serverside was called~~~~');
    return axios.get('/api/users/' + id);
  },
  updateDonation: function(id, data) {
    return axios.put('/api/users/' + id, data);
  },
  newUser: function(data) {
    return axios.post('/api/users/', data);
  },

  // Comment API's

  createPost: function(data) {
    return axios.post('/api/comments/', data);
  },

  getPosts: function(projectId) {
    return axios.get(`/api/comments/${projectId}`);
  }

  // post route contingent on logged in.
  // Deletes the book with the given id
  //   deleteBook: function(id) {
  //     return axios.delete("/api/books/" + id);
  //   },
  //   // Saves a book to the database
  //   saveBook: function(bookData) {
  //     return axios.post("/api/books", bookData);
  //   }
};
