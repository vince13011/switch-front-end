/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__main">

      <div className="footer__nav">
        <NavLink to="/contact">
          <div className="footer__nav__link">Nous contacter
          </div>
        </NavLink>
        <NavLink to="/about">
          <div className="footer__nav__link">A propos de nous
          </div>
        </NavLink>
        <NavLink to="/mentions-legales">
          <div className="footer__nav__link">Mentions légales
          </div>
        </NavLink>
      </div>
    </div>
  </footer>
);

export default Footer;
