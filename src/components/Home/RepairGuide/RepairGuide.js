import React from "react";
import "./RepairGuide.css";
import laptopTips from "../../../images/laptopTips.jpg";
import mobileTips from "../../../images/mobileTips.jpg";
import pcTips from "../../../images/pcTips.jpg";

const RepairGuide = () => {
  return (
    <section className="repairGuideContainer">
      <div className="container">
        <h1 className="repairGuideHeading">Free Repair Guide</h1>
        <p className="repairGuideTitle">
          Any kinds of digital device problem you need fixed. We can help! Check
          out our digital device repair services to find more information of
          what exactly we provide and if it suites your needs
        </p>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
          <div class="col">
            <div class="card h-100">
              <img
                src={laptopTips}
                class="card-img-top"
                alt="..."
                style={{ height: "253px" }}
              />
              <div class="card-body">
                <p class="card-title">
                  <strong>April 15, 2021</strong>
                </p>
                <h5>
                  <strong>
                    Repair your MacBook when it’s not working correctly
                  </strong>
                </h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <button class="repairButton">
                <span>Tab for More</span>
              </button>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src={mobileTips}
                class="card-img-top"
                alt="..."
                style={{ height: "253px" }}
              />
              <div class="card-body">
                <p class="card-title">
                  <strong>April 15, 2021</strong>
                </p>
                <h5>
                  <strong>
                    Repair your Samsung when it’s not working correctly
                  </strong>
                </h5>
                <p class="card-text">This is a short card.</p>
              </div>
              <button class="repairButton">
                <span>Tab for More</span>
              </button>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src={pcTips}
                class="card-img-top"
                alt="..."
                style={{ height: "253px" }}
              />
              <div class="card-body">
                <p class="card-title">
                  <strong>April 15, 2021</strong>
                </p>
                <h5>
                  <strong>
                    Repair your processor from overheating and power failure
                  </strong>
                </h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
              <button class="repairButton">
                <span>Tab for More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairGuide;
