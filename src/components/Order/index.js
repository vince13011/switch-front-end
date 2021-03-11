import React from 'react';
import './style.scss';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import Page from 'src/components/Page';

import Loading from '../App/Loading';

const Order = ({
  articles, total, loading, onClick,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const response = await axios.post('http://localhost:4000/v1/pay', {
      email: 'kevin@kevin.fr',
      total,
    });
    const secret = response.data.client_secret;
    console.log(secret);
    const result = await stripe.confirmCardPayment(secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      },
    });
    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    }
    else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        console.log(result.paymentIntent);
      }
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <Page>
      <div className="order__container">
        <h1>Récapitulatif</h1>

        <div className="order__articles">
          <h2 className="order__subtitle">Mes Articles </h2>
          {articles.map((article) => (
            <div className="order__article">
              <div className="order__article__image"> <img src={article.image} alt="" /></div>
              <div className="order__article__description">
                <div className="order__article__item order__article__item--title">{article.name}</div>
                <div className="order__article__item order__article__item--size">Taille: {article.size}</div>
                <div className="order__article__item order__article__item--qty">
                  quantité: {article.qty}
                  <div />
                </div>
                <div className="order__article__item order__article__item--price">{article.pre_tax_price * article.qty} € </div>
              </div>
            </div>
          ))}

        </div>
        <div className="order__address">
          <h2 className="order__subtitle">Mon adresse de livraison </h2>
          <p>
            12 rue de la tout eiffel
          </p>
          <p>
            59390 lys lez lannoy
          </p>
        </div>
        <div className="order__footer">
          <p>Livraison : offerte </p>
          <p>total {total}€</p>

          <button
            className="order__button"
            type="submit"
            onClick={handleSubmit}
          >payer maintenant
          </button>
          <CardElement className="order__credit" />
        </div>

      </div>

    </Page>
  );
};

export default Order;
