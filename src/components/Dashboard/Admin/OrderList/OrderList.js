import React, { useEffect, useState } from "react";
import Sidebar from "../../../Shared/Sidebar/Sidebar";
import Bookinglist from "../../User/Bookinglist/Bookinglist";

const OrderList = () => {
  const [serviceDetail, setServiceDetail] = useState([]);
  useEffect(() => {
    loadService();
  }, []);

  const loadService = () => {
    fetch("http://localhost:4000/allServiceOrder")
      .then((res) => res.json())
      .then((data) => {
        setServiceDetail(data);
      });
  };

  // update status value ---------------------------
  const updateStatus = (e, id) => {
    const selectedStatus = e.target.value;
    console.log(id, selectedStatus);

    const statusValue = {
      status: selectedStatus,
    };
    fetch(`http://localhost:4000/updateOrderStatus/${id}`, {
      method: "PATCH",
      body: JSON.stringify(statusValue),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((ressult) => {
        console.log("Status Updated");
      });
  };

  return (
    <div>
      <Sidebar></Sidebar>
      <div className="main">
        <h1>Order List</h1>
        <div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email ID</th>
                <th scope="col">Dervice</th>
                <th scope="col">Service</th>
                <th scope="col">Pay With</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {serviceDetail.map((serviceDetail) => (
                <tr key={serviceDetail._id}>
                  <th scope="row">{serviceDetail.userName}</th>
                  <td>{serviceDetail.userEmail}</td>
                  <td>{serviceDetail.serviceInfo.device}</td>
                  <td>{serviceDetail.serviceInfo.service}</td>
                  <td>Creadit Card</td>
                  <td>
                    <select
                      onChange={(e) => updateStatus(e, serviceDetail._id)}
                    >
                      <option value="Pending" style={{ color: "red" }}>
                        Pending
                      </option>
                      <option value="Done" style={{ color: "green" }}>
                        Done
                      </option>
                      <option value="On going" style={{ color: "blue" }}>
                        On going
                      </option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
