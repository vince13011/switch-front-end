/* eslint-disable no-mixed-operators */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import : local
// Composants
import Page from 'src/components/Page';
import ArticleMobileMenu from './ArticleMobileMenu';

// Style
import './style.scss';

// == Composant
function Article({
  article, toCart, size, setSize,
}) {
  // if (!article) {
  //   return <Redirect to="/error" />;
  // }
  const handleCartClick = () => {
    if (!size) {
      return console.log('pas de size ');
    }
    toCart(article, size);
  };
  const handleSizeClick = (e) => {
    console.log(e.target.name);
    setSize(e.target.name);
  };
  return (
    <Page>
      <div className="article__maincontainer">
        <div className="article__picturecontainer">
          <img src={article.image} alt="" />
        </div>
        <div className="article__descriptioncontainer">
          <h1>{article.name}</h1>
          <ArticleMobileMenu
            article={article}
            handleCartClick={handleCartClick}
            size={size}
            handleSizeClick={handleSizeClick}
          />
          <p>
            {article.description}
          </p>
          <p className="article__price ">{article.pre_tax_price + article.pre_tax_price * article.vat_rate / 100} €</p>
          <div className="article__info">
            <p className="article__info__size">taille: {size}</p>
            <p className="article__info__color">{article.color}</p>
          </div>
          <div className="article__size">
            {article.sizes.map((size) => {
              if (size.stock !== 0) {
                return (
                  <button
                    className="article__size__button"
                    onClick={handleSizeClick}
                    type="button"
                    name={size.size_name}
                  >{size.size_name}
                  </button>

                );
              }
            })}

          </div>
          <button
            type="button"
            className="article__add-to-cart-button"
            onClick={handleCartClick}
          > ajouter au panier
          </button>

        </div>
      </div>
    </Page>
  );
}
// Article.propTypes = {
//   recipe: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     thumbnail: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     difficulty: PropTypes.string.isRequired,
//     ingredients: PropTypes.array.isRequired,
//     instructions: PropTypes.array.isRequired,
//   }),
// };

// Article.defaultProps = {
//   article: null,
// };

// == Export
export default Article;
