import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer ">
      <h1 className="contactHeading">
        Do you have any question? Feel free to request for a quote . . .
      </h1>
      <p className="contactTitle">
        Impressed by our working style? Come and get the live experience, get in
        touch to make and appointment for your devices.
      </p>
      <section className="contact py-5 ">
        <div className="container">
          <div className="col-md-9 mx-auto shadow pt-3 pb-2 rounded">
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name*"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email*"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quote*"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Enter Your Message here . . ."
                ></textarea>
              </div>
              <div class="d-grid form-group">
                <button class="btn shadow rounded contactButton">
                  <span>Service </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
