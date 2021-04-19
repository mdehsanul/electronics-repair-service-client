import React, { useEffect, useState } from "react";
import Sidebar from "../../../Shared/Sidebar/Sidebar";

const ManageServices = () => {
  const [serviceDetail, setServiceDetail] = useState([]);
  useEffect(() => {
    loadService();
  }, []);

  const loadService = () => {
    fetch("http://localhost:4000/serviceDetail")
      .then((res) => res.json())
      .then((data) => {
        setServiceDetail(data);
      });
  };

  // Delete Service
  const deleteService = (id) => {
    fetch(`http://localhost:4000/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((ressult) => {
        loadService();
      });
  };
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="main">
        <h1>Manage Services</h1>
        <div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Device Type</th>
                <th scope="col">Service Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {serviceDetail.map((serviceDetail) => (
                <tr key={serviceDetail._id}>
                  <th scope="row">{serviceDetail.device}</th>
                  <td>{serviceDetail.service}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteService(serviceDetail._id)}
                    >
                      Delete
                    </button>
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

export default ManageServices;
