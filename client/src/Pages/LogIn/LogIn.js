import React from 'react';

const LogIn = () => (
  <div className="container">
    {/* Sign-up form */}
    <div className="jumbotron text-center">

      <h1 className="h1-reponsive mb-3 font">
        <strong>Log-In!</strong>
      </h1>
      <p className="lead font2">Enter your Account information to sign-in!</p>

      <form>
        <label htmlFor="defaultFormContactEmailEx" class="grey-text">
          Your email
          </label>
        <input
          type="email"
          id="defaultFormContactEmailEx"
          class="form-control"
        />

        <br />

        <label htmlFor="defaultFormContactSubjectEx" class="grey-text">
          password
          </label>
        <input
          type="text"
          id="defaultFormContactSubjectEx"
          class="form-control"
        />

        <br />

        <div className="text-center mt-4">
          <button className="btn btn-outline-grey" type="submit">
            Submit<i class="fa fa-paper-plane-o ml-2" />
          </button>
        </div>
      </form>

      <h1 className="h1-reponsive mb-3 font">
        <strong>Or Sign-up!</strong>
      </h1>
      <p className="lead font2">Enter an email and password for your account!</p>

      <form>
        <label htmlFor="defaultFormContactEmailEx" class="grey-text">
          Your email
          </label>
        <input
          type="email"
          id="defaultFormContactEmailEx"
          class="form-control"
        />

        <br />

        <label htmlFor="defaultFormContactSubjectEx" class="grey-text">
          password
          </label>
        <input
          type="text"
          id="defaultFormContactSubjectEx"
          class="form-control"
        />

        <br />

        <div className="text-center mt-4">
          <button className="btn btn-outline-grey" type="submit">
            Submit<i class="fa fa-paper-plane-o ml-2" />
          </button>
        </div>
      </form>
    </div>
  </div>

);

export default LogIn;
