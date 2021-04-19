import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../../Shared/Sidebar/Sidebar";
import { UserContext } from "../../../../App";
import "./Bookinglist.css";

const Bookinglist = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { name, email } = { ...loggedInUser };
  const [bookings, setbookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/orderDetail?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        setbookings(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Sidebar></Sidebar>
      <div className="main">
        <div className="header">
          <h1>Your Bookings</h1>
        </div>
      </div>
      <div className="container checkout">
        <table className="table table-striped table-hover shadow mt-5 mb-3 bg-body rounded table-bordered border-primary bookingList">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Total Booking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{name}</td>
              <td>{email}</td>
              <td>{bookings.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Card */}
      <div className="container bookingListDetail">
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 ">
          {bookings.map((booking) => (
            <div class="col">
              <div class="card h-100">
                <button class="btn btn-success bookingButton">
                  <span>{booking.status}</span>
                </button>
                <div class="card-body">
                  <p class="card-title">
                    <strong>
                      {new Date(booking.orderTime).toDateString("dd/MM/yyyy")}
                    </strong>
                  </p>
                  <h5>
                    <strong>{booking.serviceInfo.device}</strong>
                  </h5>
                  <p class="card-text">{booking.serviceInfo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookinglist;
