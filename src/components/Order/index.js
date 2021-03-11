import React from 'react';
import './style.scss';

import Page from 'src/components/Page';
import Loading from '../App/Loading';

const Order = ({
  articles, total, loading, onClick,
}) => {
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    onClick();
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
            onClick={handleSubmitOrder}
          >payer maintenant
          </button>

        </div>

      </div>
    </Page>
  );
};

export default Order;
