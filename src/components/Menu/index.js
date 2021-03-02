import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Menu = ({
  categories,
  logged,
  onClick,
  showMenu,
}) => (

  <nav className={showMenu ? 'menu' : 'menu menu--hidden'}>
    <button
      type="button"
      onClick={onClick}
    >X
    </button>
    <NavLink
      className="menu-link"
      activeClassName="menu-link--active"
      exact
      to="/"
    >
      Accueil
    </NavLink>
    {logged && (
    <NavLink
      className="menu-link"
      to="/favorites"
      activeClassName="menu-link--active"
      exact
    >
      Mes recettes préférées
    </NavLink>
    )}
    {categories.map((category) => (
      <NavLink
        activeClassName="menu-link--active"
        key={category}
        className="menu-link"
        to={`/recipe/${category}`}
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
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Menu;
