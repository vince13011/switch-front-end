import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const Card = ({
  image,
  id,
  name,
  pre_tax_price,
  vat_rate,
  sizes,
}) => (
  <article className="card">
    <Link to={`/article/${id}`} className="card-link">
      <img className="card-img" src={image} alt="" />
      <p className="card-name">{name}</p>
      <p className="card-price">{(pre_tax_price + (pre_tax_price * (vat_rate / 100))).toFixed(2)} €</p>
      <div className="card-sizes">
        {sizes.map((size) => (<p className="card-size" key={size.article_has_size.size_id}>{size.size_name}</p>))}
      </div>
    </Link>
  </article>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array,
  pre_tax_price: PropTypes.number.isRequired,
  vat_rate: PropTypes.number.isRequired,
};

Card.defaultProps = {
  image: '',
  sizes: [],
};

export default Card;
