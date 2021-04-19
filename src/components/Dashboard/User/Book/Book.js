import React, { useEffect, useState } from "react";
import Sidebar from "../../../Shared/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import StripeConainer from "../PaymentForm/StripeConainer";

const Book = () => {
  const { serviceId } = useParams();
  const [selectedService, setSelectedService] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("http://localhost:4000/book/" + serviceId)
      .then((res) => res.json())
      .then((data) => {
        setSelectedService(data);
        console.log(data);
      });
  }, [serviceId]); /* service info */

  const onSubmit = (data) => {
    const orderDetails = {
      userName: data.name,
      userEmail: data.email,
      serviceInfo: selectedService,
      status: "Pending",
      orderTime: new Date(),
    };

    fetch("http://localhost:4000/addOrder", {
      method: "POST",
      body: JSON.stringify(orderDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("your order placed successfully");
        }
      });
  };
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="main">
        <div className="header">
          <h1>Complete the Booking Process</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h5 className="service-form">
                <b>Service Name:</b> {selectedService.service}
              </h5>
              <h5 className="service-form">
                {" "}
                <b>Price:</b> {selectedService.price}
              </h5>
              <form
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="service-form"
              >
                <h3>Your Name</h3>
                <input
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Enter your name"
                  className="info-input"
                />
                {errors.name && (
                  <span className="error"> name is required</span>
                )}
                <h3>Email</h3>
                <input
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="info-input"
                />
                {errors.email && (
                  <span className="error">email is required</span>
                )}
                {/* stripe */}
                <input type="submit" value="submit" className="booksButton" />
              </form>
            </div>
            <div className="col-6">
              <StripeConainer></StripeConainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
