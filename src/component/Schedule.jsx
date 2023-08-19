import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Schedule() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Select
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hair Groom</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">Please fill out this form to proceed</p>
          <form id="scheduleForm">
            <div className="mb-3">
              <label htmlFor="first-name" className="col-form-label">
                Hairstylist:
              </label>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Choice Barber
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      John Doe
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Jane Doe
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Steve Smith
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sarah Smith
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="last-name" className="col-form-label">
                Schedule(8am-10pm):
              </label>
              <input type="time" className="form-control" id="last-name" />
              <input type="date" className="form-control" id="last-name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="col-form-label">
                Email:
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="col-form-label">
                Phone:
              </label>
              <input type="tel" className="form-control" id="phone" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button form="scheduleForm" className="btn btn-primary">Submit</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Schedule;
