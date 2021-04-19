import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHdd,
  faCommentDots,
  faPlus,
  faUserPlus,
  faTasks,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/isAdmin", {
      method: "POST",
      body: JSON.stringify({ adminEmail: loggedInUser.email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  // signout user
  const handleUser = () => {
    setLoggedInUser({});
    sessionStorage.removeItem("token");
  };
  return (
    <div className="sidenav">
      <h2> Repair Service</h2>
      <div className="sideNavItem">
        {isAdmin && (
          <div>
            <Link to="/book" className="links">
              <FontAwesomeIcon icon={faShoppingCart} /> Book
            </Link>
            <Link to="/bookinglist" className="links">
              <FontAwesomeIcon icon={faHdd} /> Booking List
            </Link>
            <Link to="/review" className="links">
              <FontAwesomeIcon icon={faCommentDots} /> Review
            </Link>
            <Link to="/orderlist" className="links">
              <FontAwesomeIcon icon={faHdd} /> Order list
            </Link>
            <Link to="/addservice" className="links">
              <FontAwesomeIcon icon={faPlus} /> Add Services
            </Link>
            <Link to="/addadmin" className="links">
              <FontAwesomeIcon icon={faUserPlus} /> Make Admin
            </Link>
            <Link to="/manageservice" className="links">
              <FontAwesomeIcon icon={faTasks} /> Manage Services
            </Link>
          </div>
        )}

        {!isAdmin && (
          <div>
            <Link to="/book" className="links">
              <FontAwesomeIcon icon={faShoppingCart} /> Book
            </Link>
            <Link to="/bookinglist" className="links">
              <FontAwesomeIcon icon={faHdd} /> Booking List
            </Link>
            <Link to="/review" className="links">
              <FontAwesomeIcon icon={faCommentDots} /> Review
            </Link>
          </div>
        )}

        <Link to="/" className="links" onClick={() => handleUser()}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
