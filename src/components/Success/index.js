import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link, Redirect } from 'react-router-dom';

import Page from 'src/components/Page';

const Success = ({ resetCheckoutSuccess, user, resetCheckedCart }) => {
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    resetCheckoutSuccess();
    resetCheckedCart();
    setTimeout(() => {
      setRedirect(true);
    }, 5000);
  }, []);

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Page>
      <div className="success__container">
        <div className="success__thankyou">
          <h1>Merci pour votre commande {user.firstName}</h1>
          <h2>Vous allez être redirgé vers, la page d'accueil</h2>
        </div>
        <Link to="/">si rien ne se passe, cliquez ici  retourner a la page d'accueil </Link>
      </div>
    </Page>
  );
};

Success.propTypes = {
  resetCheckoutSuccess: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  resetCheckedCart: PropTypes.func.isRequired,
};
export default Success;
