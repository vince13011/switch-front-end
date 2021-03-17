import React from 'react';
import Field from 'src/components/Field';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Page from 'src/components/Page';
import './style.scss';

const Signup = ({
  changeField,
  email,
  password,
  passwordConfirm,
  firstname,
  lastname,
  phoneNumber,
  number,
  streetName,
  zipCode,
  city,
  country,
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
          <h1> Votre Compte a bien été créé !</h1>
          <Link to="/login">
            <div className="signup__button">Se Connecter</div>
          </Link>
        </div>
      ) : (
        <>
          <h1 className="pagetitle">Créer un Compte</h1>

          <form className="signup__form">

            <Field
              name="email"
              placeholder="Email"
              onChange={changeField}
              value={email}
              type="email"
            />
            <Field
              name="password"
              placeholder="Mot de Passe"
              onChange={changeField}
              value={password}
              type="password"
            />
            <Field
              name="passwordConfirm"
              placeholder="Confirmer le mot de passe"
              onChange={changeField}
              value={passwordConfirm}
              type="password"
            />
            <Field
              name="firstname"
              placeholder="Prénom"
              onChange={changeField}
              value={firstname}
            />
            <Field
              name="lastname"
              placeholder="Nom"
              onChange={changeField}
              value={lastname}
            />
            <Field
              name="phoneNumber"
              placeholder="Numéro de Téléphone"
              onChange={changeField}
              value={phoneNumber}
            />
            <fieldset className="signup__address">
              <legend className="signup__address__legend">Adresse </legend>
              <div className="fieldwrapper">
                <Field
                  name="number"
                  placeholder="Numéro"
                  onChange={changeField}
                  value={number}
                  className="signup__address__field signup__address__field--numero"
                />
                <Field
                  name="streetName"
                  placeholder="Nom de Rue"
                  onChange={changeField}
                  value={streetName}
                  className="signup__address__field"
                />
                <Field
                  name="zipCode"
                  placeholder="Code postal"
                  onChange={changeField}
                  value={zipCode}
                  className="signup__address__field signup__address__field--zipcode"
                />
                <Field
                  name="city"
                  placeholder="Ville"
                  onChange={changeField}
                  value={city}
                  className="signup__address__field"
                />
                <Field
                  name="country"
                  placeholder="Pays"
                  onChange={changeField}
                  value={country}
                  className="signup__address__field signup__address__field--country"
                />
              </div>
            </fieldset>
            {message
              && (
                <div className="signup__message">{message}</div>
              )}
            <button
              type="submit"
              className="signup__button"
              onClick={handleSingupSubmit}
            >
              Enregistrer
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
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  streetName: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
