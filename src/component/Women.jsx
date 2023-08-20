import React from "react";
import { NavLink } from "react-router-dom";
import Schedule from "./Schedule";
import air_dried from "./img/women/air-dried.webp";
import asymetrical_bob from "./img/women/asymetrical-bob.jpg";
import baby_bangs from "./img/women/baby-bangs.webp";
import baby_fringe_and_pony from "./img/women/baby-fringe-and-pony.webp";
import bangs_on_curly_hair from "./img/women/bangs-on-curly-hair.jpg";
import blunt_short_hair from "./img/women/blunt-short-hair.jpg";
import braid_with_side_bangs from "./img/women/braid-with-side-bangs.webp";
import brushed_out from "./img/women/brushed-out.webp";
import classic_bob from "./img/women/classic-bob.webp";
import curled_under_bob from "./img/women/curled-under-bob.webp";
import curly_pixie from "./img/women/curly-pixie.webp";
import curtain_bangs from "./img/women/curtain-bangs.webp";
import full_bangs from "./img/women/full-bangs.webp";
import grown_out from "./img/women/grown-out.jpg";
import lob_and_bang from "./img/women/lob-and-bang.webp";
import mid_length_waves from "./img/women/mid-length-waves.webp";
import modern_pixie from "./img/women/modern-pixie.jpg";
import sleek_side_part from "./img/women/sleek-side-part.webp";
import strawberry_blond from "./img/women/strawberry-blond.jpg";
import wispy_fringe_with_a_half_updo from "./img/women/wispy-fringe-with-a-half-updo.webp";

const Women = () => {
  return (
    <div>
      <section id="women" className="p-3 align-items-center mt-5">
        <div className="container text-center p-3">
          <h1>Short</h1>
          <div className=" row text-center text-light g-1">
            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={asymetrical_bob}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Asymetrical Bob</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={baby_bangs}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Baby Bangs</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={blunt_short_hair}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Blunt Short Hair</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={curled_under_bob}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Curled Under Bob</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={curly_pixie}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Curly Pixie</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={curtain_bangs}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Curtain Bangs</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={grown_out}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Grown Out</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={modern_pixie}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Modern Pixie</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={classic_bob}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Classic Bob</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center p-3">
          <h1>Meduim</h1>
          <div className=" row text-center text-light g-1">
            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={lob_and_bang}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Lob and Bang</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={braid_with_side_bangs}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">
                    Braid with Side Bangs
                  </h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={bangs_on_curly_hair}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Bangs on Curly Hair</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={baby_fringe_and_pony}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Baby Fringe and Pony</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={wispy_fringe_with_a_half_updo}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">
                    Wispy Frinige w/ Half-Updo
                  </h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={full_bangs}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Full Bangs</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={brushed_out}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Brushed Out</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={air_dried}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Air Dried</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-white" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={mid_length_waves}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Mid Length Waves</h5>
                  <p className="card-text text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Women;
