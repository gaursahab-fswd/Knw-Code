import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import "../Components/Login.style.css";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./Firebase-config";
import { useNavigate } from "react-router-dom";
import { login } from "../features/userSlice";

// const StateInterface = {
//   email: "",
//   password: "",
// };

const LogIn = () => {
  // const [form, setForm] = useState(StateInterface);
  // const navigate = useNavigate();
  // const changeHandler = (event: any) => {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  // };
  // const submitForm = (e: any) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, form.email, form.password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  // };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e:any) =>{
    e.preventDefault();

    dispatch(
      login({
        name:name,
        email:email,
        password:password,
        loggedIn:true,
      })
    )
  }
  return (
    <div className="container-fluid">
      <div className="container text-left">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h2 className="card-title">Log In</h2>
                <form className="form-signin" onSubmit={(e)=>handleSubmit(e)}>
                <div className="form-label-group">
                    <label className="text-left">Name </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      className="form-control"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-label-group">
                    <label className="text-left">Email </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      className="form-control"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-label-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    className="btn btn-md btn-success btn-block text-uppercase mt-4"
                    type="submit"
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
