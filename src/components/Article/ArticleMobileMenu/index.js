// import React from 'react';
// import PropTypes from 'prop-types';

// import Dropdown from 'react-bootstrap/Dropdown';
// import './style.scss';

// const ArticleMobileMenu = ({
//   article, handleCartClick, size, handleSizeClick,
// }) => (
//   <div className="article__mobile__menu ">
//     <div className="article__mobile__menu__header">
//       <h2 className="article__mobile__menu__header-title">{article.name}</h2>
//       <p className="article__mobile__menu__header-price">{article.pre_tax_price + article.pre_tax_price * article.vat_rate / 100}  € </p>
//     </div>
//     <div className="article__mobile__menu__main">
//       <div className="article__mobile__menu__color">{article.color}</div>
//       <Dropdown className="article__mobile__menu__size">
//         <div className="">
//           Taille: {size}
//         </div>
//         <Dropdown.Toggle variant="success" id="dropdown-basic">
//           v
//         </Dropdown.Toggle>

//         <Dropdown.Menu className="article__mobile__menu__dropdown">
//           {article.sizes
//             && article.sizes.map((size) => {
//               if (size.stock !== 0) {
//                 return (
//                   <Dropdown.Item
//                     key={size.id}
//                     onClick={handleSizeClick}
//                     name={size.size_name}
//                   >
//                     {size.size_name}
//                   </Dropdown.Item>
//                 );
//               }
//             })}

//         </Dropdown.Menu>
//       </Dropdown>
//     </div>
//     <button className="mobile-btn" type="button" onClick={handleCartClick}>Ajouter au Panier</button>
//   </div>
// );

// // Fav.propTypes = {
// //   favorites: PropTypes.array.isRequired,
// // };

// export default ArticleMobileMenu;
