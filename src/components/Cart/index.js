import React from 'react';
import {
  MdAdd,
  MdRemove,

} from 'react-icons/md';
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
              <div className="cart__article__item cart__article__item--title">{article.name}</div>
              <div className="cart__article__item cart__article__item--size">Taille: {article.size}</div>
              <div className="cart__article__item cart__article__item--qty">
                quantité: {article.qty}
                <div>
                  <MdRemove className="cart__article__item__qty-btn" />
                  <MdAdd className="cart__article__item__qty-btn" />
                </div>
              </div>
              <div className="cart__article__item cart__article__item--price">{article.pre_tax_price} € </div>
            </div>
          </div>
        ))
      )

        : (
          <h1>Panier vide</h1>
        )}
    </div>

  </Page>
);

export default CART;
