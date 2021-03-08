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
function Article() {
  // if (!article) {
  //   return <Redirect to="/error" />;
  // }
  return (
    <Page>
      <div className="article__maincontainer">
        <div className="article__picturecontainer">
          <img src="https://img.ltwebstatic.com/images2_pi/2019/06/04/1559631949293247477_thumbnail_900x1199.webp" alt="" />
        </div>
        <div className="article__descriptioncontainer">
          <h1>Mon Super T shirt</h1>
          <ArticleMobileMenu />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente sunt nisi eligendi hic maxime. Numquam maxime debitis optio inventore tenetur, earum ea nostrum. Qui placeat aliquid fuga at sint modi.
            Accusantium labore corrupti aspernatur voluptates eum? Amet laboriosam tenetur unde voluptate accusamus distinctio excepturi. Neque numquam nulla nam sint. Culpa rerum numquam vitae itaque ratione debitis. Deserunt modi repellendus totam.

          </p>
          <p>19.99 €</p>
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
