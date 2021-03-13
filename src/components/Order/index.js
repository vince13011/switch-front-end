import React, { useEffect } from 'react';
import './style.scss';
import Page from '/src/components/Page';

const Order = ({
  order,
  loadOrder,
  articles,
}) => {
  useEffect(() => {
    loadOrder();
  }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <Page>
      {order
    && (
    <div className="order__maincontainer">
      <div className="order__container">
        <h1>Récapitulatif</h1>

        <div className="order__articles">
          <h2 className="order__subtitle">commande N° {order.order_number} </h2>

          {articles && articles.map((article) => (
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
        {/* <div className="order__address">
          <h2 className="order__subtitle">Mon adresse de livraison </h2>
          <p className="order__address__item">{user.lastname} {user.firstname}</p>
          <p className="order__address__item">{address.number} {address.street_name}</p>
          <p className="order__address__item">{address.zip_code} {address.city}</p>
        </div> */}
      </div>
    </div>
    )}
    </Page>
  );
};
export default Order;
