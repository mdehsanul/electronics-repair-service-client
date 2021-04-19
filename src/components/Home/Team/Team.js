import React from "react";
import "./Team.css";
import christopher from "../../../images/christopher.jpg";
import sergioDePaula from "../../../images/sergio-de-paula.jpg";
import dan from "../../../images/dan.jpg";
import AustinDistel from "../../../images/austin-distel.jpg";

const Team = () => {
  return (
    <section className="teamContainer">
      <div className="container">
        <h1 className="teamHeading">Our Awesome Team</h1>
        <p className="teamTitle">
          Meet with our qualified and expert team. We are specialized in our
          individual field. We have enough skill and tested. That’s why you’re
          getting the quality repair services.
        </p>
        <div className="row">
          <div className="col-md-3 text-center">
            <img
              className="img-fluid mb-3 shadow bg-body rounded"
              src={christopher}
              alt=""
            />
            <h4>Christopher</h4>
            <p>CEO and Founder</p>
          </div>
          <div className="col-md-3 text-center">
            <img
              className="img-fluid mb-3 shadow bg-body rounded"
              src={sergioDePaula}
              alt=""
            />
            <h4>Sergio De Paula</h4>
            <p>Chief Engineer</p>
          </div>
          <div className="col-md-3 text-center">
            <img
              className="img-fluid mb-3 shadow bg-body rounded"
              src={dan}
              alt=""
            />
            <h4>Dan</h4>
            <p>Technical Manager</p>
          </div>
          <div className="col-md-3 text-center">
            <img
              className="img-fluid mb-3 shadow bg-body rounded"
              src={AustinDistel}
              alt=""
            />
            <h4>Austin Distel</h4>
            <p>Office Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
