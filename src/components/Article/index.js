/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import : local
// Composants
import Page from 'src/components/Page';

import Field from 'src/components/Field';
// import ArticleMobileMenu from './ArticleMobileMenu';

import Loading from '../App/Loading';
// Style
import './style.scss';

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
  /* error message  */
  message,
  setMessage,

}) {
  useEffect(() => {
    loadArticle();
    setSize('');
  }, []);

  const handleCartClick = () => {
    /* if there is no selected sizes, set error message and return */
    if (!size) {
      return setMessage('vous devez choisir une taille');
    }
    toCart(article, size);
  };
  const handleSizeClick = (e) => {
    setMessage('');
    setSize(e.target.name);
  };

  const handleSubmit = (e) => {
    /* handler to modify the article : only admin */
    e.preventDefault();
    onSubmit();
  };

  const handleDelete = (e) => {
    /* handler to delete  the article : only admin */
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

          {/* calculating price including vat */}

          <p className="article__price">{Number(article.pre_tax_price) + article.pre_tax_price * article.vat_rate / 100} €</p>
          <p className="article__description">{article.description}</p>
          <div className="article__info">
            <p className="article__info__color">{article.color}</p>
          </div>
          <div className="article__size">

            {/* if there is sizes, let create button for each size */}

            {article.sizes
              && article.sizes.map((s) => {
                if (s.article_has_size.stock !== 0) {
                  return (
                    <button
                      className="article__size__btn"
                      onClick={handleSizeClick}
                      type="button"
                      key={s.id}
                      name={s.size_name}
                    >{s.size_name}
                    </button>

                  );
                }
              })}
          </div>
          <p className="article__info__size">taille : {size}</p>

          {/* if error Message , it will be shown here */}

          {message
            && (<div className="article__message">{message}</div>)}
          <button
            type="button"
            className="article__add-to-cart-button"
            onClick={handleCartClick}
          >Ajouter au Panier
          </button>
        </div>
      </div>

      {/* editting article part only for admin */}
      {admin && (
        <form className="article__modify-form" action="">
          <p className="article__modify-form_title">Modification des stocks de l'Article</p>
          <div className="article__modify-form_details">
            {article.sizes
              && article.sizes.map(
                (s) => (
                  <Field
                    key={s.id}
                    className="article__modify-form_details-name-stock"
                    type="text"
                    name={s.size_name}
                    placeholder={`Taille ${s.size_name}`}
                    value={s.article_has_size.stock}
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
Article.propTypes = {
  article: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    sizes: PropTypes.array,
    pre_tax_price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    description: PropTypes.string,
    color: PropTypes.string,
    vat_rate: PropTypes.number,
  }).isRequired,
  size: PropTypes.string.isRequired,
  toCart: PropTypes.func.isRequired,
  setSize: PropTypes.func.isRequired,
  loadArticle: PropTypes.func.isRequired,
  changeSizeField: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  message: PropTypes.string,
  setMessage: PropTypes.func.isRequired,
};

Article.defaultProps = {
  message: null,
};

// == Export
export default Article;
