import React from "react";
import "./Services.css";
import laptop from "../../../images/laptop.jpg";
import pc from "../../../images/pc.jpg";
import gaming from "../../../images/gaming.jpg";
import mobile from "../../../images/mobile.jpg";

const Services = () => {
  return (
    <div>
      <div className="container mt-5 serviceContainer">
        <h1 className="servicesHeading">highlights of our service</h1>
        <p className="servicesTitle">
          Any kinds of digital device problem you need fixed. We can help! Check
          out our digital device repair services to find more information of
          what exactly we provide and if it suites your needs
        </p>
        <div className="row mt-5">
          <div className="col-md-6">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={laptop} alt="" className="serviceImage" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                  <button
                    class="serviceButton"
                    style={{ verticalAlign: "middle" }}
                  >
                    <span>Service </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------------------------- */}
          <div className="col-md-6">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={pc} alt="" className="serviceImage" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                  <button
                    class="serviceButton"
                    style={{ verticalAlign: "middle" }}
                  >
                    <span>Service </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={gaming} alt="" className="serviceImage" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                  <button
                    class="serviceButton"
                    style={{ verticalAlign: "middle" }}
                  >
                    <span>Service </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={mobile} alt="" className="serviceImage" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                  <button
                    class="serviceButton"
                    style={{ verticalAlign: "middle" }}
                  >
                    <span>Service </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
