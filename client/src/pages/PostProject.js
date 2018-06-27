import React from 'react';

const PostProject = () => (
  <div>
    {/* Sign-up form */}
    <div className="jumbotron text-center">
      <div className="card">
        <h1 className="h1-reponsive mb-3 font">
          <strong>Project Post.</strong>
        </h1>
        <p className="lead font2">
          To Post a project to our page fill out the information below.
        </p>

        <form>
          <label htmlFor="defaultFormContactNameEx" class="grey-text">
            Your name
          </label>
          <input
            type="text"
            id="defaultFormContactNameEx"
            class="form-control"
          />

          <br />

          <label htmlFor="defaultFormContactNameEx" class="grey-text">
            Github link (if applic)
          </label>
          <input
            type="text"
            id="defaultFormContactNameEx"
            class="form-control"
          />

          <br />

          <label htmlFor="defaultFormContactEmailEx" class="grey-text">
            Image link 1
          </label>
          <input
            type="email"
            id="defaultFormContactEmailEx"
            class="form-control"
          />

          <br />

          <label htmlFor="defaultFormContactEmailEx" class="grey-text">
            Image link 2
          </label>
          <input
            type="email"
            id="defaultFormContactEmailEx"
            class="form-control"
          />

          <br />

          <label htmlFor="defaultFormContactEmailEx" class="grey-text">
            Image link 3
          </label>
          <input
            type="email"
            id="defaultFormContactEmailEx"
            class="form-control"
          />

          <br />

          <label htmlFor="defaultFormContactNameEx" class="grey-text">
            Projecct/App name
          </label>
          <input
            type="text"
            id="defaultFormContactNameEx"
            class="form-control"
          />

          <br />

          <label htmlFor="defaultFormContactNameEx" class="grey-text">
            Summary of Project
          </label>
          <input
            type="text"
            id="defaultFormContactNameEx"
            class="form-control"
          />

          <br />

          <label htmlFor="defaultFormContactNameEx" class="grey-text">
            requested Funding amount
          </label>
          <input
            type="text"
            id="defaultFormContactNameEx"
            class="form-control"
          />

          <br />

          <label htmlFor="defaultFormContactNameEx" class="grey-text">
            Describe what funding is for
          </label>
          <input
            type="text"
            id="defaultFormContactNameEx"
            class="form-control"
          />

          <br />

          <div className="text-center mt-4">
            <button class="btn btn-outline-warning" type="submit">
              Submit<i class="fa fa-paper-plane-o ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default PostProject;
