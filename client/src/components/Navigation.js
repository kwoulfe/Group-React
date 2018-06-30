import React from 'react';

const Navigation = () => (
  <div>
    {/* Navbar Example */}
    <ul className="nav nav-expand-lg nav-dark justify-content-start">
      <a className="navbar-brand">
        <img src="" height="50" alt="" />
      </a>
      <li className="nav-item marginTop">
        <a className="nav-link active headerText" href="/">
          DevHub
        </a>
      </li>
      <a className="nav-link active" href="/">
        Home
      </a>
      <a className="nav-link active" href="/login">
        Log-in
      </a>
      <a className="nav-link active" href="/signup">
        Sign-up
      </a>
      <a className="nav-link active" href="/post">
        Post a Project
      </a>
    </ul>
  </div>
);

export default Navigation;
