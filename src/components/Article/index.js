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
function Article({ article, toCart, size ,setSize }) {
  // if (!article) {
  //   return <Redirect to="/error" />;
  // }
  const handleClick = () => {
    toCart(article, size);
  };
  return (
    <Page>
      <div className="article__maincontainer">
        <div className="article__picturecontainer">
          <img src={article.image} alt="" />
        </div>
        <div className="article__descriptioncontainer">
          <h1>{article.title}</h1>
          <ArticleMobileMenu
            article={article}
            toCart={toCart}
            size={size}
            setSize={setSize}
          />
          <p>
            {article.description}
          </p>
          <p className="article__price ">{article.price} €</p>
          <button
            type="button"
            className="article__add-to-cart-button"
            onClick={handleClick}
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
