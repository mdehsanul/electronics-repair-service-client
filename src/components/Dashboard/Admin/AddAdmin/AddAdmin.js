import React from "react";
import "./AddAdmin.css";
import { useForm } from "react-hook-form";
import Sidebar from "../../../Shared/Sidebar/Sidebar";

const AddAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const orderDetails = {
      adminEmail: data.admin,
      addTime: new Date(),
    };
    fetch("http://localhost:4000/addAdmin", {
      method: "POST",
      body: JSON.stringify(orderDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Admin Added successfully");
        }
      });
  };

  return (
    <div>
      <Sidebar></Sidebar>
      <div className="main">
        <div className="header">
          <h1>Add Admin</h1>
        </div>
        <div>
          <form
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="admin-form"
          >
            <h3>Add Email of new Admin </h3>
            <input
              name="admin"
              {...register("admin", { required: true })}
              placeholder="email"
              className="admin-input"
            />
            {errors.admin && (
              <span className="error">admin name is required</span>
            )}
            <input type="submit" value="update" className="addAdminButton" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
