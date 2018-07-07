import React from "react";
import "./Cards.css";



const Cards = props => (

    <div className="cardholder">
        {props.children}
    </div>
)
export default Cards;