import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="p-5 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="lead">Copyright &copy; 2022 Hair Groom Site</p>

          <a href="#" className="position-absolute bottom-0 end-0 p-5">
            <FontAwesomeIcon icon={faArrowCircleUp} size="3x" color="#0077B5" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
