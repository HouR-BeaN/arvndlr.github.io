import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="container shadow my-5 py-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center justify-content-center bg-dark text-light form order-2">
            <h1 className="display-4">Register Now</h1>
            <p className="lead text-center">Enter Your Details to Register</p>
            <h5>OR</h5>
            <NavLink to="/login" className="btn btn-outline-primary pb-2 w-50">
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-3">
            <h1 className="display-6">Register</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input type="text" className="form-control" id="username" />
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I Agree Terms and Condition
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-4">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
