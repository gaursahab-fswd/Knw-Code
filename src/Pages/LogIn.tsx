import React, { useState } from "react";
import "../Components/Login.style.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase-config";
import { useNavigate } from "react-router-dom";

const StateInterface = {
  email: "",
  password: "",
};

const LogIn = () => {
  const [form, setForm] = useState(StateInterface);
  const navigate = useNavigate();
  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitForm = (e: any) => {
    console.log("Possible");
    e.preventDefault();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Log In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email address"
                      required
                      onChange={changeHandler}
                    />
                    <label>Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={changeHandler}
                      required
                    />
                    <label>Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label className="custom-control-label">
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    onClick={submitForm}
                  >
                    Sign in
                  </button>
                  <hr className="my-4" />
                  <button
                    className="btn btn-lg btn-google btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-google mr-2"></i> Sign in with Google
                  </button>
                  <button
                    className="btn btn-lg btn-facebook btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-facebook-f mr-2"></i> Sign in with
                    Facebook
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
