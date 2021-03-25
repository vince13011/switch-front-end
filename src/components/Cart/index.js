import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MdAdd,
  MdRemove,
  MdDelete,

} from 'react-icons/md';
import Page from 'src/components/Page';
import { Redirect } from 'react-router-dom';
import './style.scss';
import getIncludingVATprice from 'src/selectors/getIncludingVATprice'

const CART = ({
  articles,
  onPlusClick,
  onLessClick,
  onRemoveClick,
  total,
  removeCartMessage,
  isCheckedCart,
  checkingCart,
  message,
}) => {
  useEffect(
    () => {
      removeCartMessage();
    }, [],
  );
  if (isCheckedCart === true) {
    return <Redirect to="/checkout" />;
  }
  return (
    <Page>
      <div className="cart__container">
        {articles ? (

          articles.map((article) => (
            <div key = {`${article.id}${article.size}`} className="cart__article">
              <div className="cart__article__image"> <img src={article.image} alt="" /></div>
              <div className="cart__article__description">
                <div className="cart__article__item cart__article__item--title">{article.name}</div>
                <div className="cart__article__item cart__article__item--size">Taille : {article.size}</div>
                <div className="cart__article__item cart__article__item--qty">
                  <div className="cart__article__item--qty-change">

                    {/* if click on + then increase quanty ,
                     if click on - then decrease qty ,
                     if article qty is 1, decrease quantity button will
                     transform into a delete button */}

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
                          onRemoveClick(article);
                        }}
                      />
                    )}
                    <p className="cart__article__item__number">{article.qty}</p>
                    <MdAdd
                      key={`plus${article.id}`}
                      className="cart__article__item__qty-btn"
                      onClick={() => {
                        onPlusClick(article);
                      }}
                    />
                  </div>
                </div>
                <div className="cart__article__item cart__article__item--price">{(getIncludingVATprice(article.pre_tax_price,article.vat_rate)* article.qty).toFixed(2)} € </div>
              </div>
            </div>
          ))
        )

          : (
            <h1>Panier vide</h1>
          )}
        <div className="cart__footer">
          <div className="cart__footer__total">
            <h2 className="cart__total">Total</h2>
            <div>{total.toFixed(2)}€</div>
          </div>
          <div className="cart__footer__button">
            {message && (
              <div className="cart__footer__message">{message}</div>)}
            <button
              className="cart__btn"
              type="button"
              onClick={() => {
                checkingCart(articles);
              }}
            >Passer la commande
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
};

CART.propTypes = {
  articles: PropTypes.array.isRequired,
  onPlusClick: PropTypes.func.isRequired,
  onLessClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  removeCartMessage: PropTypes.func.isRequired,
  isCheckedCart: PropTypes.bool.isRequired,
  checkingCart: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default CART;
