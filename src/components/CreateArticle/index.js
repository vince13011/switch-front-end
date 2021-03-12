/* eslint-disable react/prop-types */
import React from 'react';
import Field from 'src/components/Field';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Page from 'src/components/Page';
import './style.scss';

const Signup = ({
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
  const handleSingupSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (

    <Page>
      {success ? (
        <div className="signup__success">
          <h1> Votre Article a bien été créé !</h1>
          <Link to="/login">
            <div className="signup__button">Valider</div>
          </Link>
        </div>
      ) : (
        <>
          <h1 className="pagetitle">Créer un Article </h1>

          <form className="signup__form">

            <Field
              name="title"
              placeholder="title"
              onChange={changeField}
              value={title}
              type="text"
            />
            <Field
              name="image"
              placeholder="image"
              onChange={changeField}
              value={image}
              type="image"
            />
            <Field
              name="description"
              placeholder="description"
              onChange={changeField}
              value={description}
              type="file"
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
              placeholder="couleur"
              onChange={changeField}
              value={color}
              type="file"
            />
            <Field
              name="size"
              placeholder="Taille"
              onChange={changeField}
              value={size}
              type="file"
            />
            {message
        && (
          <div className="signup__message">{message}</div>
        )}
            <button
              type="submit"
              className="signup__button"
              onClick={handleSingupSubmit}
            >
              S'inscrire
            </button>
          </form>
        </>
      )}
    </Page>

  );
};
export default Signup;

Signup.propTypes = {
  changeField: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
