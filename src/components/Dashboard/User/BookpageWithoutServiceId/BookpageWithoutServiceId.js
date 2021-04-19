import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../Shared/Sidebar/Sidebar";
import "./BookpageWithoutServiceId.css";

const BookingpageWithhoutServiceId = () => {
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
      <Sidebar></Sidebar>
      <div className="container mt-5 BookpageWithoutServiceId">
        <div className="row mt-5">
          {serviceDetail.map((serviceDetail) => (
            <div class="col-md-3 mt-4">
              <div class="card h-100 ">
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
                  </p>
                  <p class="card-text">{serviceDetail.description}</p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
                <Link to={"/book/" + serviceDetail._id}>
                  <button class="serviceButton">
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

export default BookingpageWithhoutServiceId;
