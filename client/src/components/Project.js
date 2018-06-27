import React from "react";

const Project = () => (

    <div>
        {/* Jumbotron */}
        <div class="jumbotron text-center">
            <div class="row">
                <div className="card col-md-9">
                    <h1 class="h1-reponsive mb-3 font"><strong>
                        Check out this Project!
                    </strong></h1>

                </div>

                <div className="card col-md-3">
                    <h1 class="h1-reponsive mb-3 font"><strong>
                        Project details here:
                    </strong></h1>

                    <p>blah blah blah</p>
                    <p>blah blah blah 2</p>
                    <p>blah blah blah 3</p>

                    <a href="/donate"><button>Donate</button></a>

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

export default Project;