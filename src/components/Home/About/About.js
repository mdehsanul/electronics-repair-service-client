import React from "react";
import "./About.css";
import devices from "../../../images/devices.jpg";
import facebook from "../../../images/facebook.png";

const About = () => {
  return (
    <section className="pb-0 pb-md-5 my-5 aboutSection">
      <h1 className="aboutHeading">about the shop</h1>
      <p className="aboutTitle">
        The Most Affordable and Reliable Service Center In Bangladesh
      </p>
      <div className="container mt-5 mb-5">
        <div className="row mb-5">
          <div className="col-md-5 mb-4 m-md-0">
            <img className="img-fluid" src={devices} alt="" />
          </div>
          <div className="col-md-7 align-self-center">
            <h1 className="shadow bg-body rounded ps-3 pt-1 pb-1">
              <strong style={{ color: "#FFDD00" }}>23</strong> YEARS <br /> OF
              EXPERIENCE IN DIGITAL DEVICE REPAIR SERVICES
            </h1>
            <p className="text-secondary my-5">
              <strong>Laptop and Notebook : </strong>
              Our service center is able to fix all types of problems regarding
              your Laptop and Notebook. Our employees are highly trained and has
              lots of experience fixing laptops and notebooks. We provide
              hardware and software support for your required laptop or
              notebook. <br />
              <strong>Desktop PC : </strong>
              Our trained service providers are trained to handle all types of
              Desktop PC problems and issues and are able to deliver the right
              solution for your product. We provide both hardware and software
              support for your Desktop PC.
              <br />
              <strong>Monitor : </strong>
              The most common problems that occur with monitors are with the
              power port, display in and output, no display and response and the
              most common of all the problem is the display panel problem. Our
              service team can provide all the required solutions for all these
              problems and are highly trained for all the situations. <br />
              <strong>TV : </strong>
              Servicing TV is the easiest task for our service centers. We have
              expert service men in our team for dealing with this particular
              product. <br />
              <strong>Conclusion : </strong>
              Our Company Moto is “Customers are First”. We keep our moto in all
              sectors of our services. We aim to satisfy our customers and give
              them the best experience when dealing with us. <br />
            </p>
            <div className="socialButton">
              <button className="facebookbutton">
                <img src={facebook} className="facebookImage" /> Visit Our
                Facebook Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
