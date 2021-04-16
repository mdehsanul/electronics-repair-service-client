import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHdd,
  faCommentDots,
  faPlus,
  faUserPlus,
  faTasks,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <h2> Repair Service</h2>
      <div className="sideNavItem">
        <Link to="/book" className="links">
          <FontAwesomeIcon icon={faShoppingCart} /> Book
        </Link>
        <Link to="/bookinglist" className="links">
          <FontAwesomeIcon icon={faHdd} /> Booking List
        </Link>
        <Link to="/Review" className="links">
          <FontAwesomeIcon icon={faCommentDots} /> Review
        </Link>
        <Link to="/orderlist" className="links">
          <FontAwesomeIcon icon={faHdd} /> Order list
        </Link>
        <Link to="/addservice" className="links">
          <FontAwesomeIcon icon={faPlus} /> Add Services
        </Link>
        <Link to="/makeadmin" className="links">
          <FontAwesomeIcon icon={faUserPlus} /> Make Admin
        </Link>
        <Link to="/manageservice" className="links">
          <FontAwesomeIcon icon={faTasks} /> Manage Services
        </Link>
        <Link to="/" className="links">
          <FontAwesomeIcon icon={faHome} /> Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
