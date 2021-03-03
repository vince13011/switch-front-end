import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

import './style.scss';

const Menu = ({
  categories,
  logged,
  onClick,
  showMenu,
}) => (

  <nav className={showMenu ? 'menu' : 'menu menu--hidden'}>
    <button
      className="menu__button"
      type="button"
      onClick={onClick}
    ><MdClose />
    </button>
    
    <NavLink
      className="menu__link"
      activeClassName="menu__link--active"
      exact
      to="/"
    >
      Accueil
    </NavLink>
    {logged && (
    <NavLink
      className="menu__link"
      to="/favorites"
      activeClassName="menu__link--active"
      exact
    >
      Mes recettes préférées
    </NavLink>
    )}
    {categories.map((category) => (
      <NavLink
        activeClassName="menu__link--active"
        key={category}
        className="menu__link"
        to={`/categories/${category}`}
      >
        {category}
      </NavLink>
    ))}

  </nav>
);

Menu.propTypes = {
  logged: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Menu;
