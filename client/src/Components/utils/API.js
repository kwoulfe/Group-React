import axios from 'axios';

export default {
    // Comment API's
    createPost: function (data) {
        return axios.post("/api/commets/", data)
    },

    getPosts: function () {
        return axios.get('/api/comments');
    }

};