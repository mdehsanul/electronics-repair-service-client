import React, { useEffect, useState } from "react";
import "./CustomerReview.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/reviewFromCustomer")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  });

  return (
    <section className="reviewContainer ">
      <div className="container">
        <h1 className="reviewHeading">Our Clients Opinion About Us</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
          {reviews.map((review) => (
            <div class="col ">
              <div class="card h-100 shadow bg-body rounded">
                <div class="card-body">
                  <h5 class="card-title text-primary">- {review.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    - {review.company}
                  </h6>
                  <p class="card-text">{review.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
