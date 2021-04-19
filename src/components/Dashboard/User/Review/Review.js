import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../../Shared/Sidebar/Sidebar";
import "./Review.css";

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      company: data.company,
      description: data.description,
    };

    fetch("http://localhost:4000/addReview", {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Review Added successfully");
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
        <div>
          <form
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="review-form"
          >
            <h3>Your Name</h3>
            <input
              name="name"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="review-input"
            />
            {errors.name && <span className="error"> name is required</span>}
            <h3>Company's name, Designation</h3>
            <input
              name="company"
              {...register("company", { required: true })}
              placeholder="Company's name, Designation"
              className="review-input"
            />
            {errors.company && (
              <span className="error">
                Company's name, Designation is required
              </span>
            )}
            <h3>Description</h3> <br />
            <textarea
              name="description"
              {...register("description", { required: true })}
              placeholder="Description"
              className="review-input description-input"
            />
            {errors.description && (
              <span className="error">Description is required</span>
            )}
            <input type="submit" value="submit" className="submitButton" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
