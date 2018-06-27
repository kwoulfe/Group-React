
import React from "react";

const SignUp = () => (

    <div>

        {/* Sign-up form */}
        <div class="jumbotron text-center">

            <div className="card">
                <h1 class="h1-reponsive mb-3 font"><strong>
                    Sign-up!
                </strong></h1>
                <p class="lead font2">Enter the information below to sign-up for an account!</p>

                <form>

                    <label for="defaultFormContactNameEx" class="grey-text">Your name</label>
                    <input type="text" id="defaultFormContactNameEx" class="form-control"></input>

                    <br></br>

                    <label for="defaultFormContactEmailEx" class="grey-text">Your email</label>
                    <input type="email" id="defaultFormContactEmailEx" class="form-control"></input>

                    <br></br>

                    <label for="defaultFormContactSubjectEx" class="grey-text">password</label>
                    <input type="text" id="defaultFormContactSubjectEx" class="form-control"></input>

                    <br></br>

                    <div class="text-center mt-4">
                        <button class="btn btn-outline-warning" type="submit">Submit<i class="fa fa-paper-plane-o ml-2"></i></button>
                    </div>
                </form>

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

export default SignUp;