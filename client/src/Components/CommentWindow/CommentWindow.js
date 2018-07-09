import React, { Component } from 'react';
import './CommentWindow.css';
import API from '../../Pages/utils/API';


class CommentWindow extends React.Component {

    state = {
        comment: [],
        author: "",
        text: '',
        date: ''
    };

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        API.getPosts()
            .then(
                res =>
                    this.setState({
                        comments: res.data,
                        author: "",
                        text: '',
                        date: ''
                    })
                // console.log(comments);
            )

            .catch(err => console.log(err));
    };

    render = () => {
        return (

            <div className="container">
                <h1>Comments</h1>
                {this.state.comment.map(comment => (
                    <div className="commentBox"
                        id={comment.id}
                        key={comment.id}
                        author={comment.author}
                        text={comment.text}
                        date={comment.date}>
                        <div className="row">
                            <h3>{comment.author}</h3>
                            <h3>{comment.date}</h3>
                        </div>
                        <div className="row">
                            <h4>{comment.text}</h4>
                        </div>
                    </div>
                ))};
            </div>

        )
    }
};

export default CommentWindow;