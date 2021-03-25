import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
  /* loading state during payment */
  const [cardLoader, setCardLoader] = useState(false);

  /* custom hooks from stripe */
  const stripe = useStripe();
  const elements = useElements();

  /* cart checking is true for 5 min after we redirect to cart page */
  setTimeout(
    () => {
      removeCartStatus();
    }, 300000,
  );

  const handleCancel = () => {
    /* if we want to modify order , we turn the cart checking to false and redirect to cart page  */
    removeCartStatus();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    /* loading for payment */
    setCardLoader(true);
    /* checking that stripe is on the page */

    if (!stripe || !elements) {
      return;
    }

    /* sending a request payment to the backend for security,
   then back responds with a client secret */

    const response = await axios.post('https://switch-ecommerce.herokuapp.com/v1/pay', {
      email: user.email,
      total,
    });
    const secret = response.data.client_secret;

    /* building and sending the request to stripe */

    const result = await stripe.confirmCardPayment(secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: `${user.firstname} ${user.lastname}`,
        },
      },
    });
    setCardLoader(false);
    /* dispatching the action with the result of payment (through the container) */
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
          {articles.map((article) => (
            <div key = {`${article.id}${article.size}`} className="checkout__article">
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
        <p className="checkout__address__costs">Livraison : offerte </p>
        <p className="checkout__address__total">Total {total}€</p>
        <div className="checkout__address">
          <h2 className="checkout__subtitle">Adresse de livraison</h2>
          <p className="checkout__address__item-name">{user.lastname} {user.firstname}</p>
          <p className="checkout__address__item-address1">{address.number} {address.street_name}</p>
          <p className="checkout__address__item-address2">{address.zip_code} {address.city}</p>
        </div>
        <div className="checkout__footer">
          <button
            className="checkout__button"
            type="button"
            onClick={handleCancel}
          >Modifier ma Commande
          </button>

          <h2 className="checkout__subtitle-cb">Paiement par Carte Bancaire</h2>
          <CardElement className="checkout__credit" />

          {/* we show the loader or the payment button */}

          {cardLoader
            ? (<div className="cardLoader">Chargement...</div>)
            : (
              <>
                <button
                  className="checkout__button"
                  type="submit"
                  onClick={handleSubmit}
                >Payer !
                </button>
              </>
            )}
        </div>

      </div>

    </Page>

  );
};

Checkout.propTypes = {
  articles: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  address: PropTypes.object.isRequired,
  logged: PropTypes.bool.isRequired,
  isCheckedCart: PropTypes.bool.isRequired,
  removeCartStatus: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
};
export default Checkout;
