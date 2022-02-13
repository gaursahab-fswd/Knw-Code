import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/Action/userAction";
import { rootState } from "../Redux/type";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const StateInterface = {
  email: "",
  password: "",
};

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(StateInterface);

  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitForm = (e: any) => {
    e.preventDefault();

    dispatch(loginUser(form, navigate));
  };
  return (
    <div className="container-fluid">
      <div className="container text-left">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h2 className="card-title">Log In</h2>
                <form className="form-signin">
                  <div className="form-label-group">
                    <label className="text-left">Email </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="form-label-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      required
                      onChange={changeHandler}
                    />
                  </div>
                  <button
                    className="btn btn-md btn-success btn-block text-uppercase mt-4"
                    type="submit"
                    onClick={submitForm}
                  >
                    Sign in
                  </button>
                  <hr className="my-4" />
                  <button
                    className="btn btn-md  btn-block btn-outline-dark"
                    type="submit"
                  >
                    <i className="fa fa-google" aria-hidden="true"></i>&nbsp;
                    Sign in with Google
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-md btn-primary btn-block"
                    type="submit"
                  >
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    &nbsp; Sign in with Facebook
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

export default LogIn;
