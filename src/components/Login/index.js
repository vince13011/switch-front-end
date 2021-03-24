import React from 'react';
import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import LoginForm from 'src/containers/LoginForm';
import { Link, Redirect } from 'react-router-dom';

import './style.scss';

const Login = ({ logged, message }) => {
  if (logged) {
    return (
      <Redirect to="/mon-compte" />
    );
  }
  return (
    <Page>
      <h1 className="loginpage__title">Se connecter</h1>
      <LoginForm />
      {message
        && <p className="loginpage__message">{message}</p>}
      <div className="loginpage__signup">
        <h2 className="loginpage__subtitle">Pas encore de compte ?</h2>
        <Link
          className="loginpage__link"
          to="/signup"
          exact
        >
          Créer un Compte
        </Link>
      </div>
    </Page>
  );
};

Login.propTypes = {
  logged: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default Login;
