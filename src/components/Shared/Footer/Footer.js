import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faPinterest,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="container-fluid  footerColor">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sec about">
                <h2>Electronics Repair Service</h2>
                <p>
                  Electronics Repair Service is a Bangladesh based electronic
                  device repair service center. Basically we repair all major
                  brands of PCs, Laptops, Smartphone, Tablet, Flash Drive and
                  Gaming Console devices issues.
                </p>
                <ul className="sci">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className="icon" icon={faFacebookF} />
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className="icon" icon={faYoutube} />
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className="icon" icon={faTwitter} />
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className="icon" icon={faPinterest} />
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className="icon" icon={faInstagram} />
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className="icon" icon={faLinkedin} />
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sec quicklinks">
                <h2>Shop Info</h2>
                <ul>
                  <li>
                    <a href="#">About</a>{" "}
                  </li>
                  <li>
                    <a href="#">FAQ</a>{" "}
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>{" "}
                  </li>
                  <li>
                    <a href="#">Help</a>{" "}
                  </li>
                  <li>
                    <a href="#">Terms and Conditions</a>{" "}
                  </li>
                  <li>
                    <a href="#">Contact</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sec quicklinks">
                <h2>Services</h2>
                <ul>
                  <li>
                    <a href="#">Laptop Repair</a>{" "}
                  </li>
                  <li>
                    <a href="#">iPhone Repair</a>{" "}
                  </li>
                  <li>
                    <a href="#">iPad Repair</a>{" "}
                  </li>
                  <li>
                    <a href="#">Tablet Repair</a>{" "}
                  </li>
                  <li>
                    <a href="#">Smartphone Repair</a>{" "}
                  </li>
                  <li>
                    <a href="#">Gadget Repair</a>{" "}
                  </li>
                  <li>
                    <a href="#">Recover Data</a>{" "}
                  </li>
                  <li>
                    <a href="#">Backup Data</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sec contacts">
                <h2>Contact Us</h2>
                <ul className="info">
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </span>
                    <p>
                      965 East Avenu, <br /> Sector 9 Russel Squire,
                      <br />
                      Bangladesh
                    </p>
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faPhoneAlt} />
                    </span>
                    <p>
                      <a href="tel:+88-0198-5001-500">+88-0198-5001-500</a>
                      <br />
                      <a href="tel:+88-0177-1111-956">+88-0177-2365-956</a>{" "}
                    </p>
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <p>
                      <a href="mailto:info@shanto.com">info@shanto.com</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrightText">
        <p>
          Copyright <FontAwesomeIcon icon={faCopyright} />{" "}
          {new Date().getFullYear()} MD.Ehsanul Haque Shanto. All Rights
          Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
