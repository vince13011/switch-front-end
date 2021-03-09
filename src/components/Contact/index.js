/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Page from 'src/components/Page';
import './style.scss';

const Contact = () => (
  <Page>
    <h1 className="contact__h1">Besoin d'un renseignement ?</h1>
    <div className="contact">
      <h1 className="contact__h1">Nous envoyer un message</h1>
      <form className="contact__form">
        <div className="contact__name">
          <label htmlFor="name">Nom : </label>
          <input className="contact__input" type="text" id="name" name="user_name" />
        </div>
        <div className="contact__email">
          <label htmlFor="mail">e-mail : </label>
          <input className="contact__input" type="email" id="mail" name="user_mail" />
        </div>
        <div className="contact__msg">
          <label htmlFor="name">Message:  </label>
          <textarea id="msg" name="user_message" />
        </div>
        <input className="contact__submit" type="submit" name="submit" />
      </form>
    </div>
    <div>
      <h1 className="contact__h1">Nous appeler</h1>
      <p>Tel: 0403020100</p>
      <p>Adresse: 1 Bd Général de Gaulle, 75000 Paris</p>
    </div>
  </Page>
);

export default Contact;
