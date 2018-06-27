import React from "react";

const Donate = () => (

    <div>
        {/* Jumbotron */}
        <div class="jumbotron text-center">
            <div class="row">
                <div className="card col-md-12">
                    <h1 class="h1-reponsive mb-3 font"><strong>
                        Donate to this project!
                    </strong></h1>


                    <div className="card row">
                        <h1 class="h1-reponsive mb-3 font"><strong>
                            Project Name here:
                    </strong></h1>
                        <h1 class="h1-reponsive mb-3 font"><strong>
                            Project Name Small Summary:
                    </strong></h1>

                        <p>blah blah blah</p>
                        <p>blah blah blah 2</p>
                        <p>blah blah blah 3</p>

                        <form>

                            <label for="defaultFormContactNameEx" class="grey-text">Amount</label>
                            <input type="text" id="defaultFormContactNameEx" class="form-control"></input>

                            <br></br>

                            <label for="defaultFormContactEmailEx" class="grey-text">Paypal or CC #</label>
                            <input type="email" id="defaultFormContactEmailEx" class="form-control"></input>


                        </form>

                        
                            <div class="text-center mt-4">
                                <a href="/thankyou"><button class="btn btn-outline-warning">Submit<i class="fa fa-paper-plane-o ml-2"></i></button></a>
                            </div>

                        </div>
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
        
export default Donate;