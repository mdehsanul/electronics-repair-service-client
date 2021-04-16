import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <section className="reviewContainer ">
      <div className="container">
        <h1 className="reviewHeading">Our Clients Opinion About Us</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">- MD. Ehsanul Haque shanto</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  - Technical officer
                </h6>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus cupiditate perferendis magnam eos eum voluptate
                  quibusdam debitis porro, error necessitatibus nostrum eligendi
                  eaque quo. Ea corrupti blanditiis suscipit nemo quasi.
                </p>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------------- */}
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">- MD. Ehsanul Haque shanto</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  - Technical officer
                </h6>
                <p class="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Perspiciatis unde debitis quae, illum amet, ullam saepe magni
                  harum voluptate nam rem exercitationem.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">- MD. Ehsanul Haque shanto</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  - Technical officer
                </h6>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  voluptates iste iure animi officiis ullam a, aliquid porro!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
