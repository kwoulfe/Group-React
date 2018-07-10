import axios from 'axios';

export default {
  // Gets all books
  getUsers: function () {
    return axios.get('/api/users');
  },
  // Gets the book with the given id
  getUser: function (id) {
    console.log("~~~~getuser serverside was called~~~~")
    return axios.get('/api/users/' + id);
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
