import React from 'react';
import Field from 'src/components/Field';
import Page from 'src/components/Page';
import './style.scss';

const SignUp = ({ changeField, email }) => (
  <Page>
    <h1 className="pagetitle">s'enregistrer </h1>
    <form className="signup__form">

      <Field
        name="password"
        placeholder="Email"
        onChange={changeField}
        value={email}
      />
      <Field
        name="password"
        placeholder="Mot de Passe"
        onChange={changeField}
        value={email}
      />
      <Field
        name="confirm"
        placeholder="Confirmer le mot de passe"
        onChange={changeField}
        value={email}
      />
      <Field
        name="firstname"
        placeholder="Prénom"
        onChange={changeField}
        value={email}
      />
      <Field
        name="lastName"
        placeholder="Nom"
        onChange={changeField}
        value={email}
      />
      <Field
        name="phone_number"
        placeholder="Telephone"
        onChange={changeField}
        value={email}
      />
      <fieldset className="signup__address">
        <legend className="signup__address__legend">Adresse </legend>
        <div className="fieldwrapper">
          <Field
            name="number"
            placeholder="Numero"
            onChange={changeField}
            value={email}
            className="signup__address__field signup__address__field--numero"
          />
          <Field
            name="street_name"
            placeholder="Nom de Rue"
            onChange={changeField}
            value={email}
            className="signup__address__field"
          />
          <Field
            name="zipcode"
            placeholder="Code postal"
            onChange={changeField}
            value={email}
            className="signup__address__field signup__address__field--zipcode"
          />
          <Field
            name="city"
            placeholder="Ville"
            onChange={changeField}
            value={email}
            className="signup__address__field"
          />
        </div>
      </fieldset>
      <button
        type="submit"
        className="signup__button"
      >
        S'inscrire
      </button>
    </form>
  </Page>
);

export default SignUp;
