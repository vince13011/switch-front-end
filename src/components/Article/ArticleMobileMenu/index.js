import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'react-bootstrap/Dropdown';
import './style.scss';

const ArticleMobileMenu = ({
  article, handleCartClick, size, handleSizeClick,
}) => (
  <div className="article__mobile__menu ">
    <div className="article__mobile__menu__header">
      <h2>{article.name}</h2>
      <p>{article.pre_tax_price + article.pre_tax_price * article.vat_rate / 100}  € </p>
    </div>
    <div className="article__mobile__menu__main">
      <div className="article__mobile__menu__color">{article.color}</div>
      <Dropdown className="article__mobile__menu__size">
        <div className="">
          Taille: {size}
        </div>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          V
        </Dropdown.Toggle>

        <Dropdown.Menu className="article__mobile__menu__dropdown">
          {article.sizes.map((size) => {
            if (size.stock !== 0) {
              return (
                <Dropdown.Item
                  onClick={handleSizeClick}
                  name={size.size_name}
                >
                  {size.size_name}
                </Dropdown.Item>
              );
            }
          })}
         
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <button type="button" onClick={handleCartClick}> ajouter au panier</button>
  </div>
);

// Fav.propTypes = {
//   favorites: PropTypes.array.isRequired,
// };

export default ArticleMobileMenu;
