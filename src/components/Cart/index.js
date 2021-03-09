import React from 'react';
import Page from 'src/components/Page';
import './style.scss';

const CART = ({ articles }) => (
  <Page>
    <div className="cart__container">
      {articles ? (
        articles.map((article) => (
          <div className="cart__article">
            <div className="cart__article__image"> <img src={article.image} alt="" /></div>
            <div className="cart__article__description">
              <div className="cart__article__price">{article.pre_tax_price} € </div>
              <div className="cart__article__title">{article.name}</div>
              <div className="cart__article__size">{article.size}</div>
              <div className="cart__article__qty">quantité {article.qty}</div>
            </div>

          </div>
        )))
        : (
          <div>Panier vide</div>
        )}
    </div>

  </Page>
);

export default CART;
