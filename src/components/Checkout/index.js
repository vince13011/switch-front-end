import React, { useState } from 'react';
import './style.scss';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import Page from 'src/components/Page';

import { Redirect } from 'react-router-dom';
import Loading from '../App/Loading';


const Checkout = ({
  articles,
  total,
  isLoading,
  onClick,
  user,
  address,
  logged,
  isCheckedCart,
  removeCartStatus,
  success,
}) => {
  const [cardLoader, setCardLoader] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const handleCancel = () => {
    removeCartStatus();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setCardLoader(true);
    if (!stripe || !elements) {
      return;
    }
    const response = await axios.post('https://switch-e-commerce.herokuapp.com/v1/pay', {
      email: user.email,
      total,
    });
    const secret = response.data.client_secret;
    console.log(secret);
    const result = await stripe.confirmCardPayment(secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: `${user.firstname} ${user.lastname}`,
        },
      },
    });
    setCardLoader(false);
    onClick(result, address, user);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (!logged) {
    return <Redirect to="/" />;
  }
  if (!isCheckedCart) {
    return <Redirect to="/panier" />;
  }
  if (success) {
    return <Redirect to="/success-checkout" />;
  }
  return (
    <Page>

      <div className="checkout__container">
        <h1>Récapitulatif</h1>

        <div className="checkout__articles">
          <h2 className="checkout__subtitle">Mes Articles </h2>
          {articles.map((article) => (
            <div className="checkout__article">
              <div className="checkout__article__image"> <img src={article.image} alt="" /></div>
              <div className="checkout__article__description">
                <div className="checkout__article__item checkout__article__item--title">{article.name}</div>
                <div className="checkout__article__item checkout__article__item--size">Taille: {article.size}</div>
                <div className="checkout__article__item checkout__article__item--qty">
                  quantité: {article.qty}
                  <div />
                </div>
                <div className="checkout__article__item checkout__article__item--price">{article.pre_tax_price * article.qty} € </div>
              </div>
            </div>
          ))}

        </div>
        <div className="checkout__address">
          <h2 className="checkout__subtitle">Mon adresse de livraison </h2>
          <p className="checkout__address__item">{user.lastname} {user.firstname}</p>
          <p className="checkout__address__item">{address.number} {address.street_name}</p>
          <p className="checkout__address__item">{address.zip_code} {address.city}</p>
        </div>
        <div className="checkout__footer">
          <p>Livraison : offerte </p>
          <p>total {total}€</p>
          <button
            className="checkout__button"
            type="button"
            onClick={handleCancel}
          >Modifier Ma Commande
          </button>

          <CardElement className="checkout__credit" />
          {cardLoader
            ? (<div className="cardLoader">Loading...</div>)
            : (
              <>
                <button
                  className="checkout__button"
                  type="submit"
                  onClick={handleSubmit}
                >payer maintenant
                </button>
              </>
            )}
        </div>

      </div>

    </Page>

  );
};

export default Checkout;
