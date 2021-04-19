import React, { useState } from "react";
import "./AddServices.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Sidebar from "../../../Shared/Sidebar/Sidebar";

const Addservices = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      device: data.device,
      service: data.service,
      price: data.price,
      description: data.description,
      imageURL: imageURL,
    };

    fetch("http://localhost:4000/addService", {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => console.log("server side response"));
    console.log(eventData);
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "f3b60d77ed5006098cf9fb644caf2530");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleService = () => {
    alert("New Service Added");
  };
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="main">
        <div className="header">
          <h1>Add Services</h1>
        </div>
        <div>
          <form
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="service-form"
          >
            <h3>Device Type</h3>
            <input
              name="device"
              {...register("device", { required: true })}
              placeholder="device name"
              className="device-input"
            />
            {errors.device && (
              <span className="error">device name is required</span>
            )}
            <h3>Service Name</h3>
            <input
              name="service"
              {...register("service", { required: true })}
              placeholder="service name"
              className="service-input"
            />
            {errors.service && (
              <span className="error">service name is required</span>
            )}
            <h3>Price</h3>
            <input
              name="price"
              {...register("price", { required: true })}
              placeholder="price"
              className="service-input"
            />
            {errors.price && <span className="error">price is required</span>}
            <h3>Description</h3> <br />
            <textarea
              name="description"
              {...register("description", { required: true })}
              placeholder="Description"
              className="service-input description-input"
            />
            {errors.description && (
              <span className="error">Description is required</span>
            )}
            <h3 className="mt-3">Service Cover Photo</h3>
            <input
              name="image"
              type="file"
              onChange={handleImageUpload}
              className="service-image"
            />
            <input
              type="submit"
              value="save"
              className="addServiceButton"
              onClick={handleService}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addservices;
