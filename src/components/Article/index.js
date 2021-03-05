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
function Article({ article }) {
  // if (!article) {
  //   return <Redirect to="/error" />;
  // }
  return (
    <Page>
      <div className="article__maincontainer">
        <div className="article__picturecontainer">
          <img src={article.image} alt="" />
        </div>
        <div className="article__descriptioncontainer">
          <h1>{article.title}</h1>
          <ArticleMobileMenu {...article}/>
          <p>
            {article.description}
          </p>
          <p className="article__price ">{article.price} €</p>
          <button type="button" className="article__add-to-cart-button"> ajouter au panier</button>

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
