import React from "react";

const Home = () => (

    <div>

        {/* Jumbotron */}
        <div class="jumbotron text-center">

            <div className="card">
                <h1 class="h1-reponsive mb-3 font"><strong>
                    Welcome to our Example Home page!
                </strong></h1>
                <p class="lead font2">Explore new and developing apps!</p>

            </div>
        </div>

        {/* Project Cards */}
        <div className="row">

            <div className="col-md-3 card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0qGK86Vd5uCa97hCc-6l9acq9xWEgHpnqUF5lh042iqK1er4" class="img-thumbnail"></img>
                <div card-body>
                    <p> Example Projecct 1 </p>
                    <a href="/project"><button>Check them out!</button></a>
                </div>

            </div>

            <div className="col-md-3 card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0qGK86Vd5uCa97hCc-6l9acq9xWEgHpnqUF5lh042iqK1er4" class="img-thumbnail"></img>
                <div card-body>
                    <p> Example Projecct 2 </p>
                    <a href="/project"><button>Check them out!</button></a>

                </div>

            </div>

            <div className="col-md-3 card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0qGK86Vd5uCa97hCc-6l9acq9xWEgHpnqUF5lh042iqK1er4" class="img-thumbnail"></img>
                <div card-body>
                    <p> Example Projecct 3 </p>
                    <a href="/project"><button>Check them out!</button></a>

                </div>

            </div>

            <div className="col-md-3 card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0qGK86Vd5uCa97hCc-6l9acq9xWEgHpnqUF5lh042iqK1er4" class="img-thumbnail"></img>
                <div card-body>
                    <p> Example Projecct 4 </p>
                    <a href="/project"><button>Check them out!</button></a>

                </div>

            </div>

        </div>



        {/* footer */}
        <div className="font-small blue1 margin2">

            <div class="footer-copyright text-center py-3 fontStyle">© 2018 Copyright:

                        <span> UCD Bootcamp and Tanner McClain</span>
            </div>

        </div>
    </div>

);

export default Home;