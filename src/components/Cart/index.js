import React from 'react';
import {
  MdAdd,
  MdRemove,
  MdDelete,

} from 'react-icons/md';
import Page from 'src/components/Page';

import './style.scss';

const CART = ({ articles, onPlusClick, onLessClick }) => (
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
                  {article.qty > 1 ? (
                    <MdRemove
                      key={`less${article.id}`}
                      className="cart__article__item__qty-btn"
                      onClick={() => {
                        onLessClick(article);
                      }}
                    />
                  ) : (
                    <MdDelete
                      key={`less${article.id}`}
                      className="cart__article__item__delete"
                      onClick={() => {
                        onLessClick(article);
                      }}
                    />
                  )}
                  <MdAdd
                    key={`plus${article.id}`}
                    className="cart__article__item__qty-btn"
                    onClick={() => {
                      onPlusClick(article);
                    }}
                  />
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
