import React from "react";
import "./Cards.css";
// import { Link } from "react-router-dom";


// handleClick = event => {
//     const { name, image } = event.target;
//     this.setState({
//         [name]: image
//     });
// }
// const Cards = props => (
//     <div className="col-sm-4">
//         <div className="card" onClick={() => props.handleClick(props.index)}>

//             <div className="img-container">
//                 <img alt={props.name} src={props.image} />
//             </div>

//         </div>
//     </div>
// )
// export default Cards;
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