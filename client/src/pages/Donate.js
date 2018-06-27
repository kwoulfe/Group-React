import React from 'react';

const Donate = () => (
  <div>
    {/* Jumbotron */}
    <div className="jumbotron text-center">
      <div className="row">
        <div className="card col-md-12">
          <h1 className="h1-reponsive mb-3 font">
            <strong>Donate to this project!</strong>
          </h1>

          <div className="card row">
            <h1 className="h1-reponsive mb-3 font">
              <strong>Project Name here:</strong>
            </h1>
            <h1 className="h1-reponsive mb-3 font">
              <strong>Project Name Small Summary:</strong>
            </h1>

            <p>blah blah blah</p>
            <p>blah blah blah 2</p>
            <p>blah blah blah 3</p>

            <form>
              <label htmlFor="defaultFormContactNameEx" class="grey-text">
                Amount
              </label>
              <input
                type="text"
                id="defaultFormContactNameEx"
                className="form-control"
              />

              <br />

              <label htmlFor="defaultFormContactEmailEx" class="grey-text">
                Paypal or CC #
              </label>
              <input
                type="email"
                id="defaultFormContactEmailEx"
                className="form-control"
              />
            </form>

            <div className="text-center mt-4">
              <a href="/thankyou">
                <button class="btn btn-outline-warning">
                  Submit<i class="fa fa-paper-plane-o ml-2" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Donate;
