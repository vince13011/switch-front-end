import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const Card = ({
  image,
  id,

}) => (
  <article className="card">
    <Link to={`/article/${id}`} className="card-link">
      <img className="card-img" src={image} alt="" />
    </Link>
  </article>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Card;
