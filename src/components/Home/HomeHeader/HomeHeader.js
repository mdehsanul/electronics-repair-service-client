import React from "react";
import "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <main className="homeHeader">
      <div className="container">
        <div className="row ">
          <div className="col-md-10 homeHeaderColumn">
            <h2 className="text-white homeHeaderTitle">
              We Give Life To Your <br />
              <span className="homeHeaderTitleColor"> Electronic</span> Devices
            </h2>
            <p className="text-white homeHeaderSummary">
              We are providing the Electronic Device Repair services from last
              23 years. We believe in giving the best services to our clients.
              We use all the modern technologies to make fast repair services.
              Just send your valuable{" "}
              <strong className="homeHeaderTitleColor">
                Laptop, PC, Mobile, Gaming Device or Smartphone
              </strong>{" "}
              and we will take care of it. We will happy to server our best to
              you at affordable price, just keep faith on us. We are happy to
              give an awesome repair experience to your devices.
            </p>
            <div>
              <button
                type="button"
                class="btn btn-light  fw-bold homeButtonOne"
              >
                Get Start Now
              </button>
              <button type="button" class="btn fw-bold  homeButtonTwo">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeHeader;
