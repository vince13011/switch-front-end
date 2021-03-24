import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

import './style.scss';

const Menu = ({
  categories,
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
    {categories.map((category) => (
      <NavLink
        activeClassName="menu__link--active"
        key={category.id}
        className="menu__link"
        to={`/categories/${category.title}`}
      >
        {category.title}
      </NavLink>
    ))}

  </nav>
);

Menu.propTypes = {
  onClick: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
};

export default Menu;
