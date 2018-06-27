
import React from "react";

const ThankYou = () => (

    <div>

        {/* Sign-up form */}
        <div class="jumbotron text-center">

            <div className="card">
                <h1 class="h1-reponsive mb-3 font"><strong>
                    Thank you for your Support!
                </strong></h1>
                <p class="lead font2">Click below to go back to searching!</p>

                <a href="/"><button class="btn btn-outline-warning" type="submit">Home<i class="fa fa-paper-plane-o ml-2"></i></button></a>


            </div>
        </div>


        {/* footer */}
        <div className="font-small blue1 margin2">

            <div class="footer-copyright text-center py-3 fontStyle">© 2018 Copyright:

                        <span> UCD Bootcamp</span>
            </div>

        </div>
    </div>

);

export default ThankYou;