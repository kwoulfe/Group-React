import React from "react";

const Navigation = () => (

    <div>
        {/* Navbar Example */}
        <ul class="nav nav-expand-lg nav-dark justify-content-start">
            <a class="navbar-brand">
                <img src="" height="50" alt=""></img>
            </a>
            <li class="nav-item marginTop">
                <a class="nav-link active headerText" href="/">DevHub</a>
            </li>
            <a class="nav-link active" href="/">Home</a>
            <a class="nav-link active" href="/login">Log-in</a>
            <a class="nav-link active" href="/signup">Sign-up</a>
        </ul>

    </div>


);

export default Navigation;