/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import Field from 'src/components/Field';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Page from 'src/components/Page';
import './style.scss';

const CreateArticle = ({
  changeField,
  title,
  image,
  description,
  price,
  color,
  size,
  onSubmit,
  message,
  success,

}) => {
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (

    <Page>
      {success ? (
        <div className="createArticle__success">
          <h1> Votre Article a bien été créé !</h1>
          <Link to="/home">
            <div className="createArticle__button">Valider</div>
          </Link>
        </div>
      ) : (
        <>
          <h1 className="pagetitle">Créer un Article </h1>
          <form className="createArticle__form">
            <Field
              name="title"
              placeholder="Titre"
              onChange={changeField}
              value={title}
              type="text"
            />
            <Field
              name="image"
              placeholder="image"
              onChange={changeField}
              value={image}
              type="file"
            />
            <Field
              name="description"
              placeholder="Description"
              onChange={changeField}
              value={description}
              type="text"
            />
            <Field
              name="price"
              placeholder="Prix"
              onChange={changeField}
              value={price}
              type="number"
            />
            <Field
              name="color"
              placeholder="Couleur"
              onChange={changeField}
              value={color}
              type="text"
            />
            <Field
              name="size"
              placeholder="Taille"
              onChange={changeField}
              value={size}
              type="text"
            />
            {message
              && (
                <div className="createArticle__message">{message}</div>
              )}
            <button
              type="submit"
              className="createArticle__button"
              onClick={handleSignupSubmit}
            >
              Valider
            </button>
          </form>
        </>
      )}
    </Page>

  );
};
export default CreateArticle;

CreateArticle.propTypes = {
  changeField: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
