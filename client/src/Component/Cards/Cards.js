import React from "react";
import "./Cards.css";

const Cards = props => (
    <div className="card" onClick={() => props.handleClick(props.index)}>

        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>

    </div>
)
export default Cards;