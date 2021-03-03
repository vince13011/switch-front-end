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
        className="loginform__field"
        name="email"
        placeholder="Adresse Email"
        onChange={changeField}
        value={email}
      />
      <Field
        className="loginform__field"
        name="password"
        type="password"
        placeholder="Mot de passe"
        onChange={changeField}
        value={password}
      />
      <button
        type="submit"
        className="loginform__button"
      >
        S'identifier
      </button>
    </form>

  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
