import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="py-5 my-5" id="contact">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-sm-start m-3">Contact Info</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Main Location:
                  <span className="fw-light">Ermita Balayan Batangas</span>
                </li>
                <li className="list-group-item">
                  Phone Number:<span className="fw-light"> 09519295420</span>
                </li>
                <li className="list-group-item">
                  Email:<span className="fw-light"> hairgroom@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="col-md contact-container d-flex align-items-cente justify-content-end">
              <img
                src="img/contact.svg"
                className="img-fluid"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
