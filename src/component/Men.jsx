import React from "react";
import Schedule from "./Schedule";
import ceasar_cut from "./img/men/ceasar-cut.webp";
import classic_ceasar_cut from "./img/men/classic-ceasar-cut.webp";
import classic_curly_fade from "./img/men/classic-curly-fade.jpg";
import cool_comb_over from "./img/men/cool-comb-over.webp";
import deep_side_part from "./img/men/deep-side-part.webp";
import flat_top_hair_cut from "./img/men/flat-top-hair-cut.webp";
import full_fringe_cut from "./img/men/full-fringe-cut.webp";
import hard_part_fade from "./img/men/hard-part-fade.jpg";
import hard_part from "./img/men/hard-part.jpg";
import messsy_ceasar from "./img/men/messy-ceasar-cut.webp";
import messy_fade from "./img/men/messy-fade.webp";
import sleek_finge_cut from "./img/men/sleek-fringe-cut.webp";
import slicked_back_mohawk from "./img/men/slicked-back-mohawk.webp";
import slicked_back from "./img/men/slicked-back.webp";
import straight_strands from "./img/men/straight-stands.webp";
import surfer_style from "./img/men/surfer-style.webp";
import sweep_it_to_the_side from "./img/men/sweep-it-to-the-side.webp";
import styled_waves from "./img/men/sytled-waves.webp";
import teeny_mohawk from "./img/men/teeny-mohawk.webp";
import thick_hair from "./img/men/thick-hair.webp";
import windblown_hair from "./img/men/windblown-hair.jpg";

export default function () {
  return (
    <div>
      <section id="men" className="p-3 align-items-center mt-5">
        <div className="container text-center p-3">
          <h1>Short</h1>
          <div className=" row text-center text-light g-1">
            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={ceasar_cut}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Ceasar Haircut</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={classic_ceasar_cut}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Classic Ceasar Cut</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={messsy_ceasar}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Messy Ceasar Haircut</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={sleek_finge_cut}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Sleek Fringe Haircut</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={slicked_back_mohawk}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Slicked Back Mohawk</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={hard_part}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Hard Part Cut</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={teeny_mohawk}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Teeny Mohawk</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={classic_curly_fade}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Classic Curly Fade</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={flat_top_hair_cut}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Flat Top Hair Cut</h5>
                  <p className="card-text">
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
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={sweep_it_to_the_side}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Sweep It To The Side</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={windblown_hair}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Windblown Hair</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={deep_side_part}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Deep Side Part</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={hard_part_fade}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Hard Part Fade</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={surfer_style}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Surfer Style</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={styled_waves}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Styled Waves</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={straight_strands}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Straight Strands</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={slicked_back}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Sliked Back</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur, maiores.
                  </p>
                  <Schedule />
                </div>
              </div>
            </div>

            <div className="col-md justify-content-around d-flex ">
              <div className="card bg-secondary" style={{ width: "18rem" }}>
                <div className="container mt-5" style={{ height: "18rem" }}>
                  <img
                    src={cool_comb_over}
                    alt="ceasar cut"
                    className="card-img-top"
                    style={{ height: "18rem", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Cool Comb Over</h5>
                  <p className="card-text">
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
}
