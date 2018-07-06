import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
    render() {
        return (
            // <div>
            //     <form>
            //         <div class="form-group">
            //             <label for="exampleFormControlTextarea1">Example textarea</label>
            //             <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
            //         </div>
            //     </form>
            //     <button type="submit" class="btn btn-primary">Submit</button>
            // </div>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Comments</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit<i class="fa fa-paper-plane-o ml-2" /></button>
                </form>
            </div>
        )
    }
}
export default Comment;