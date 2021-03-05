import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'react-bootstrap/Dropdown';
import './style.scss';

const ArticleMobileMenu = ({article,}) => (
  <div className="article__mobile__menu ">
    <div className="article__mobile__menu__header">
      <h2>{article.title}</h2>
      <p>{article.price} € </p>
    </div>
    <div className="article__mobile__menu__main">
      <div className="article__mobile__menu__color">NOIR</div>
      <Dropdown className="article__mobile__menu__size">
      <div className="">
        Taille
      </div>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          V
        </Dropdown.Toggle>

        <Dropdown.Menu className="article__mobile__menu__dropdown">
          <Dropdown.Item href="#/action-1">xs</Dropdown.Item>
          <Dropdown.Item href="#/action-2">S</Dropdown.Item>
          <Dropdown.Item href="#/action-3">M</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <button type="button" > ajouter au panier</button>
  </div>
);

// Fav.propTypes = {
//   favorites: PropTypes.array.isRequired,
// };

export default ArticleMobileMenu;
