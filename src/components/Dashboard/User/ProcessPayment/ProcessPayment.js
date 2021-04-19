import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./ProcessPayment.css";
import SplitForm from "./SplitForm";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <SplitForm></SplitForm>
    </Elements>
  );
};

export default ProcessPayment;
