import React from 'react';
import './Navbar.css';
import Search from '../Search';
// import NewProject from '../NewProject/NewProject';

function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <ul>
                <li>
                    <a className="navbar-brand">
                        <img src=".../public/Assets/logo.png" width="30" height="30" className="Devlogo" alt=""></img>
                        DevHub </a>
                </li>
                <li>
                    <a className="nav-link" href="">Start a Project</a>
                </li>

                <li>
                    <a className="nav-link" href="">Log In</a>
                </li>
                <li>
                    <Search />
                </li>
            </ul>
        </nav >
    )

}

export default Navbar;
