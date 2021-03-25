import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';

import './styles.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,

}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (

    <form autoComplete="off" className="loginform" onSubmit={handleSubmit}>
      <Field
        name="email"
        placeholder="Adresse Email"
        onChange={changeField}
        value={email}
      />
      <Field
        name="password"
        type="password"
        placeholder="Mot de passe"
        onChange={changeField}
        value={password}
      />
      <button
        type="submit"
        className="loginform__button"
        onClick={handleSubmit}
      >
        Se Connecter
      </button>
    </form>

  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
