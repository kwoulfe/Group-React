import React from 'react';

const Home = () => (
  <div>
    {/* Jumbotron */}
    <div className="jumbotron text-center">
      <div className="card">
        <h1 className="h1-reponsive mb-3 font">
          <strong>Welcome to our Example Home page!</strong>
        </h1>
        <p className="lead font2">Explore new and developing apps!</p>
      </div>
    </div>

    <div className="container">
      {/* Project Cards */}
      <div className="row">
        <div className="col-md-3 card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0qGK86Vd5uCa97hCc-6l9acq9xWEgHpnqUF5lh042iqK1er4"
            class="img-thumbnail"
          />
          <div card-body>
            <p> Example Projecct 1 </p>
            <a href="/project">
              <button>Check them out!</button>
            </a>
          </div>
        </div>

        <div className="col-md-3 card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0qGK86Vd5uCa97hCc-6l9acq9xWEgHpnqUF5lh042iqK1er4"
            class="img-thumbnail"
          />
          <div card-body>
            <p> Example Projecct 2 </p>
            <a href="/project">
              <button>Check them out!</button>
            </a>
          </div>
        </div>

        <div className="col-md-3 card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0qGK86Vd5uCa97hCc-6l9acq9xWEgHpnqUF5lh042iqK1er4"
            className="img-thumbnail"
          />
          <div card-body>
            <p> Example Projecct 3 </p>
            <a href="/project">
              <button>Check them out!</button>
            </a>
          </div>
        </div>

        <div className="col-md-3 card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0qGK86Vd5uCa97hCc-6l9acq9xWEgHpnqUF5lh042iqK1er4"
            className="img-thumbnail"
          />
          <div card-body>
            <p> Example Projecct 4 </p>
            <a href="/project">
              <button>Check them out!</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
