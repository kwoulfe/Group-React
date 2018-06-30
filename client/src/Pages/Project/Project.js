import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import cards from "../../cards.json";
import './Project.css';

class Project extends Component {

    state = {
        cards
    };
    render() {
        return (
            <div>
                <Navbar />
                <div className="row">
                    <div className="col-md-3 card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0qGK86Vd5uCa97hCc-6l9acq9xWEgHpnqUF5lh042iqK1er4" class="img-thumbnail" alt=""></img>
                        <div card-body>
                            <p> Example Projecct 1 </p>
                            <a href="/donate"><button>Check them out!</button></a>
                        </div>

                    </div>

                    <div className="col-md-3 card">
                        <div card-body>
                            <p> Example Projecct 2 </p>
                            <a href="/donate"><button>Check them out!</button></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 card">
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;