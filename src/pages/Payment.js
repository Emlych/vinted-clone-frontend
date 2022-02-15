//Reste à faire
// - total à changer

import React from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Payment = () => {
  //Get data from CardOffer.js
  const location = useLocation();
  const { title, price } = location.state;

  //Stripe info
  const stripePromise = loadStripe(
    "pk_test_51Hmy9lJ4SY6jJJ1K5TG5ZDswpSCPEWILiK9te70RwvHTo40sxom28LO7zgA9fUmwnHUfZOSq4K8MkptJGlsyXkcv00EA0LvrWd"
  );

  return (
    <div className="payment">
      <div className="payment__container">
        <h3>Résumé de la commande</h3>
        <div className="payment__detail">
          <div className="payment__line">
            <div className="detail--line-text">Commande</div>
            <div className="detail--line-amount">{price} €</div>
          </div>
          <div className="payment__line">
            <div className="detail--line-text">
              Frais de protection acheteurs
            </div>
            <div className="detail--line-amount">0.40 €</div>
          </div>
          <div className="payment__line">
            <div className="detail--line-text">Frais de port</div>
            <div className="detail--line-amount">0.80 €</div>
          </div>
        </div>
        <div className="payment__detail">
          <div className="payment__line bold">
            <div className="detail--line-text">Total</div>
            <div className="detail--line-amount">
              {(price + 0.4 + 0.8).toFixed(2)} €
            </div>
          </div>
        </div>
        <div className="payment__detail">
          Il ne vous reste plus qu'une étape pour vous offrir{" "}
          <span className="bold">{title}</span>. Vous allez payer{" "}
          <span className="bold">{(price + 0.4 + 0.8).toFixed(2)} € </span>
          (frais de protection et frais de port inclus).
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
