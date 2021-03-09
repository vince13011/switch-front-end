import React from 'react';
import Page from 'src/components/Page';
import LoginForm from 'src/containers/LoginForm';
import { Link, Redirect } from 'react-router-dom';

import './style.scss';

const Login = ({ logged }) => {
  if (logged) {
    return (
      <Redirect to="/mon-compte" />
    );
  }
  return (
    <Page>
      <h1 className="loginpage__title">Se connecter</h1>
      <LoginForm />
      <div className="loginpage__signup">
        <h2 className="loginpage__subtitle"> Pas encore de compte ? </h2>
        <Link
          className="loginpage__link"
          to="/signup"
          exact
        >
          s'inscrire
        </Link>
      </div>
    </Page>
  );
};

export default Login;
