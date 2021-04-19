import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../PaymentForm/PaymentForm";

const PUBLIC_KEY = "pk_test_TYooMQauvdEDq54NiTphI7jx";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeConainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm></PaymentForm>
    </Elements>
  );
};

export default StripeConainer;
