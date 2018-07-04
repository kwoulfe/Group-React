import React, { Component } from "react"
import "./Carousel.css"
class Carousel extends Component {
    render() {
        return (

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=949c13b84649441112e7991d4bc259e5&auto=format&fit=crop&w=800&q=60" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1529989659177-4b8629a6e85c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fa26b8537f4f2147d0cb6e54773d79c0&auto=format&fit=crop&w=800&q=60" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1529919367619-8be6a208160f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=97ea336f2a40e2dbd72da31f34462b30&auto=format&fit=crop&w=800&q=60" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Carousel;

{/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel"> 
<div className="carousel-inner">
    <div className="carousel-item active">
        <img className="d-block w-100" src="https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=949c13b84649441112e7991d4bc259e5&auto=format&fit=crop&w=800&q=60" alt="First slide" />
    </div>
    <div className="carousel-item">
        <img className="d-block w-100" src="https://images.unsplash.com/photo-1529989659177-4b8629a6e85c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fa26b8537f4f2147d0cb6e54773d79c0&auto=format&fit=crop&w=800&q=60" alt="Second slide" />
    </div>
    <div className="carousel-item">
        <img className="d-block w-100" src="https://images.unsplash.com/photo-1529919367619-8be6a208160f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=97ea336f2a40e2dbd72da31f34462b30&auto=format&fit=crop&w=800&q=60" alt="Third slide" />
    </div>
</div>
</div> */}