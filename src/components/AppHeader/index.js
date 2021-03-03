import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';

const AppHeader = ({ onClick, categories, logged }) => (
  <header className="header">
    <div className="header__main">
      <button
        className="header__button"
        type="button"
        onClick={onClick}
      >--
      </button>
      <Link
        to="/"
        className="header__logo"
      >
        <div>SWITCH</div>
      </Link>
      <div className="header__buttons">
        <div className="header__buttons__btn">panier</div>
        {logged ? (
          <Link to="/mon-compte">
            <div className="header__buttons__btn">Mon Compte</div>
          </Link>
        )
          : (
            <Link to="/login">
              <div className="header__buttons__btn">login</div>
            </Link>
          )}

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
  logged: PropTypes.bool.isRequired,
};
