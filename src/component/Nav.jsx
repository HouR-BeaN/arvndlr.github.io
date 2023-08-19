import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-dark py-3 d-flex justify-content-end shadow  fixed-top
      "
      >
        <div className="container">
          <NavLink to="/" className="navbar-brand fw-bold">
            Hair Groom
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/men" className="nav-link">
                  Men
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/women" className="nav-link">
                  Women
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/hairstylist" className="nav-link">
                  Hairstylist
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/login"
            className="btn btn-outline-primary ms-3 navbar-collapse collapse justify-content-center"
            style={{ width: "50px" }}
          >
            <FontAwesomeIcon
              icon={faRightToBracket}
              size="1x"
              color="#0F71F2"
              style={{ margin: "0 3px" }}
            />
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="btn btn-outline-primary ms-3 navbar-collapse collapse justify-content-center"
            style={{ width: "50px" }}
          >
            <FontAwesomeIcon
              icon={faUser}
              size="1x"
              color="#0F71F2"
              style={{ margin: "0 3px" }}
            />
            Register
          </NavLink>

          <NavLink
            to="/dashboard"
            className="btn btn-outline-secondary ms-3 navbar-collapse collapse justify-content-center"
            style={{ width: "50px" }}
          >
            Dashboard
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
