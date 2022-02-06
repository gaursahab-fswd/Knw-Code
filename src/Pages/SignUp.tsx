import React from "react";
import "../Components/Signup.style.css";

const SignUp = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign Up</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                    <label>Enter Your Name</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                    <label>Enter Email</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label>Password</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label>Confirm Password</label>
                  </div>
                  <div className="p-2">
                      <p>Gender</p>
                    <input type="radio" name="radio" value="radio" />
                    <label>Male</label>&nbsp;&nbsp;
                    <input type="radio" name="radio" value="radio" />
                    <label>Female</label>&nbsp;&nbsp;
                    <input type="radio" name="radio" value="radio" />
                    <label>Other</label>
                  </div>
                  <div>
                    <div className="form-label-group pt-2">
                      <input
                        type="text"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                      <label>Phone</label>
                    </div>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
