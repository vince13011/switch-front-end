import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

const AppHeader = ({ onClick, categories }) => (
  <header className="header">
    <div className="header__main">
      <button
        className="header__button"
        type="button"
        onClick={onClick}
      >--
      </button>
      <div className="header__logo">SWITCH</div>
      <div className="header__buttons">
        <div className="header__buttons__btn">panier</div>
        <div className="header__buttons__btn">Mon Compte</div>
      </div>
    </div>
    <nav className="header__nav">
      {categories.map((category) => (
        <NavLink
          className="header__nav__link"
          activeClassName="header__nav__link--active"
          exact
          to={`/categories/${category}`}
        >
          {category}

        </NavLink>
      ))}

    </nav>
  </header>
);

export default AppHeader;

AppHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
};
