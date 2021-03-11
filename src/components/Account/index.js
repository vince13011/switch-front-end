import React from 'react';
import Page from 'src/components/Page';
import { Redirect } from 'react-router-dom';
import './style.scss';

const Account = ({ user, logout }) => {
  if (!user.logged) {
    return <Redirect to="/" />;
  }
  return (
    <Page>
      <div className="account__maincontainer">
        <div className="account__title">
          <h1>Bienvenue: {user.firstname}</h1>
        </div>
        <div className="account__info">
          <h2 className="account__subtitle"> Mes infos </h2>
          <p className="account__item">Prénom: {user.firstname}</p>
          <p className="account__item">Nom: {user.lastname}</p>
          <p className="account__item">Numero de téléphone: {user.phone_number}</p>
        </div>
        <div className="account__address">
          <h2 className="account__subtitle"> Mon Adresse</h2>
          <p className="account__item">{user.number} {user.street_name}</p>
          <p className="account__item">{user.zip_code} {user.city}</p>

        </div>
        <button
          className="account__button"
          onClick={() => {
            logout();
          }}
          type="button"
        >Se déconnecter
        </button>
      </div>
    </Page>
  );
};

export default Account;
