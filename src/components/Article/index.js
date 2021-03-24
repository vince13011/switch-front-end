/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import : local
// Composants
import Page from 'src/components/Page';

import Field from 'src/components/Field';
// import ArticleMobileMenu from './ArticleMobileMenu';

import Loading from '../App/Loading';
// Style
import './style.scss';
import { setCartMessage } from '../../actions';

// == Composant
function Article({
  article,
  toCart,
  size,
  setSize,
  loadArticle,
  isLoading,
  changeSizeField,
  changeField,
  onSubmit,
  admin,
  onDelete,
  message,
  setMessage,

}) {
  useEffect(() => {
    loadArticle();
    setSize('');
  }, []);

  const handleCartClick = () => {
    if (!size) {
      return setMessage('vous devez choisir une taille');
    }
    toCart(article, size);
  };
  const handleSizeClick = (e) => {
    ;
    setMessage('');
    setSize(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (

    <Page>
      <div className="article__maincontainer">
        <div className="article__picturecontainer">
          <img className="article__picturecontainer-picture" src={article.image} alt={article.name} />
        </div>
        <div className="article__descriptioncontainer">
          <h1 className="article__title">{article.name}</h1>

          <p className="article__price">{Number(article.pre_tax_price) + article.pre_tax_price * article.vat_rate / 100} €</p>
          <p className="article__description">{article.description}</p>
          <div className="article__info">
            {/* <p className="article__info__size">taille: {size}</p> */}
            <p className="article__info__color">{article.color}</p>
          </div>
          <div className="article__size">
            
            {article.sizes
              && article.sizes.map((size) => {
                if (size.article_has_size.stock !== 0) {
                  return (
                    <button
                      className="article__size__btn"
                      onClick={handleSizeClick}
                      type="button"
                      name={size.size_name}
                    >{size.size_name}
                    </button>

                  );
                }
              })}
          </div>
          <p className="article__info__size">taille : {size}</p>
          {message
              && (<div className="article__message">{message}</div>) }
          <button
            type="button"
            className="article__add-to-cart-button"
            onClick={handleCartClick}
          >Ajouter au Panier
          </button>
        </div>
      </div>
      {admin && (
        <form className="article__modify-form" action="">
          <p className="article__modify-form_title">Modification des stocks de l'Article</p>
          <div className="article__modify-form_details">
            {article.sizes
              && article.sizes.map(
                (size) => (
                  <Field
                    className="article__modify-form_details-name-stock"
                    type="text"
                    name={size.size_name}
                    placeholder={`Taille ${size.size_name}`}
                    value={size.article_has_size.stock}
                    onChange={changeSizeField}
                  />
                ),
              )}

          </div>
          <Field
            className="article__modify-form_details-price"
            type="text"
            name="pre_tax_price"
            placeholder="Prix HT"
            value={article.pre_tax_price}
            onChange={changeField}
          />
          <div className="article__modify-form_details-btn">
            <button
              className="article__modify-form_details-btn-modify"
              type="submit"
              onClick={handleSubmit}
            >Confirmer
            </button>
            <button
              className="article__modify-form_details-btn-delete"
              type="submit"
              onClick={handleDelete}
            >Supprimer
            </button>
          </div>

        </form>
      )}
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
