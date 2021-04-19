import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const [serviceDetail, setServiceDetail] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/serviceDetail")
      .then((res) => res.json())
      .then((data) => {
        setServiceDetail(data);
      });
  }, []);
  return (
    <div>
      <h1 className="servicesHeading">highlights of our service</h1>
      <p className="servicesTitle">
        Any kinds of digital device problem you need fixed. We can help! Check
        out our digital device repair services to find more information of what
        exactly we provide and if it suites your needs
      </p>
      <div className="container mt-5 serviceContainer">
        <div className="row mt-5">
          {serviceDetail.map((serviceDetail) => (
            <div class="col-md-3 mt-4 ">
              <div class="card h-100 shadow bg-body rounded">
                <img
                  src={serviceDetail.imageURL}
                  class="card-img-top"
                  alt="..."
                  style={{ height: "253px" }}
                />
                <div class="card-body">
                  <p class="card-title">
                    <strong style={{ fontSize: "22px" }}>
                      {serviceDetail.device}
                    </strong>{" "}
                    <br />
                    <strong>{serviceDetail.service}</strong>
                    <br />
                    <br />
                    <h5>
                      <strong>{serviceDetail.price}</strong>
                    </h5>
                  </p>
                  <p class="card-text">{serviceDetail.description}</p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
                <Link to={"/book/" + serviceDetail._id}>
                  <button class="serviceButton shadow rounded">
                    <span>Go for Service </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
