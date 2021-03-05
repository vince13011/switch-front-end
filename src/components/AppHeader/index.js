/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { MdAccountCircle, MdShoppingCart, MdMenu } from 'react-icons/md';
import './style.scss';

const AppHeader = ({ onClick, categories, logged ,count }) => (
  <header className="header">
    <div className="header__main">
      <button
        className="header__button"
        type="button"
        onClick={onClick}
      >
        <MdMenu />
      </button>
      <Link
        to="/"
        className="header__logo"
      >
        <div>SWITCH</div>
      </Link>

      <div className="header__buttons">
        <Link to="#">
          <div>
            <MdShoppingCart />
          </div>
          <div className="header__buttons__btn">Panier ({count})
          </div>
        </Link>
        {logged ? (
          <Link to="/mon-compte">
            <div>
              <MdAccountCircle />
            </div>
            <div className="header__buttons__btn">mon Compte
            </div>
          </Link>
        )
          : (
            <Link to="/login">
              <div>
                <MdAccountCircle />
              </div>
              <div className="header__buttons__btn">login
              </div>
            </Link>

          )}

      </div>
    </div>
    <nav className="header__nav">
      {categories.map((category) => (
        <NavLink
          key={category}
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
