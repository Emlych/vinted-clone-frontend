import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ title, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setcompleted] = useState(false);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElement = elements.getElement(CardElement);
      //   console.log("amount ==>", price);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "me",
        currency: "eur",
      });
      console.log("stripeResponse  ===> ", stripeResponse);
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/pay",
        {
          stripeToken,
          title: title,
          amount: price,
        }
      );
      console.log(response.data);
      if (response.data.status === "succeeded") setcompleted(true);
    } catch (error) {
      console.log("error response ==>", error.response);
    }
  };
  return (
    <div>
      {!completed ? (
        <div>
          <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit">Valider</button>
          </form>
        </div>
      ) : (
        <span>Paiement effectué</span>
      )}
    </div>
  );
};

export default CheckoutForm;
