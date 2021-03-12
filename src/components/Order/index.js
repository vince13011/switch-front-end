import React from 'react';
import './style.scss';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import Page from 'src/components/Page';
import { Redirect } from 'react-router-dom';
import Loading from '../App/Loading';

const Order = ({
  articles,
  total,
  loading,
  onClick,
  user,
  address,
  logged,
  isCheckedCart,
  removeCartStatus,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const handleCancel = () => {
    removeCartStatus();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const response = await axios.post('https://switch-e-commerce.herokuapp.com/v1/pay', {
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

    onClick(result, address, user);
  };

  if (loading) {
    return <Loading />;
  }
  if (!logged) {
    return <Redirect to="/" />;
  }
  if (!isCheckedCart) {
    return <Redirect to="/panier" />;
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
          <p className="order__address__item">{address.number} {address.street_name}</p>
          <p className="order__address__item">{address.zip_code} {address.city}</p>
        </div>
        <div className="order__footer">
          <p>Livraison : offerte </p>
          <p>total {total}€</p>
          <button
            className="order__button"
            type="button"
            onClick={handleCancel}
          >Modifier Ma Commande
          </button>
          <CardElement className="order__credit" />
          <button
            className="order__button"
            type="submit"
            onClick={handleSubmit}
          >payer maintenant
          </button>
        </div>

      </div>

    </Page>
  );
};

export default Order;
