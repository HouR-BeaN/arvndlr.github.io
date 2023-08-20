import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import fundamentals from "./img/fundamentals.svg";

const About = () => {
  return (
    <div>
      <section id="about" className="about py-5 mt-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img
                src={fundamentals}
                className="img-fluid w-50"
                alt=""
              />
            </div>
            <div className="col-md p-2">
              <h2 className="fw-semibold">About</h2>
              <p className="lead">
                Project Hair Groom website is an online platform that aims to
                save time and help costumer to find their best haircut at ease
                and convinience.
              </p>
              <p>
                You will learn here the care and style that your hair seeks. We
                showcase you different hairstyle recommendation that will allow
                you to have a good choice of hair.
              </p>
              <NavLink to="/about" className="btn btn-light mt-3">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ marginRight: "6px" }}
                />
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
