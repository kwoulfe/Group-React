import React from "react";
import "./Cards.css";
// import { Link } from "react-router-dom";


// handleClick = event => {
//     const { name, image } = event.target;
//     this.setState({
//         [name]: image
//     });
// }
const Cards = props => (
    <div>

        <div className="col-md-3">
            <div className="card">
                {props.children}
            </div>
        </div>

    </div>
)
export default Cards;