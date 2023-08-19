import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hairstylist from "./Hairstylist";

const HomePage = () => {
  return (
    <div>
      <section
        id="home"
        className="bg-dark text-light p-lg-0 pt-lg text-center text-sm-start"
      >
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between p-5">
            <div>
              <h1 className="fs-1">
                Let Us <span className="text-primary">Groom</span> Your
                <span className="text-primary"> Hair </span>
              </h1>
              <p className="lead my-4">
                We help you to find the best hair-cut for you that suits your
                identiy and express your fashion.
              </p>
              <button
                className="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                Get Your Haircut
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block p-5"
              src="../public/img/showcase.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="news-letter-cont bg-secondary ext-light py-4 px-5">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0 text-light">Sign Up For Newsletter</h3>
        </div>
        <div className="input-group news-input">
          <input
            type="text"
            className="form-control my-1"
            placeholder="Enter Email"
          />
          <button className="btn btn-dark ms-1" type="button">
            Submit
          </button>
        </div>
      </section>
      <About />
      <Hairstylist />
      <Contact />
    </div>
  );
};

export default HomePage;
