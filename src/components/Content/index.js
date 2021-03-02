import React from 'react';
import PropTypes from 'prop-types';
import recipesd from 'src/data'
import Card from 'src/components/Card';

import './style.scss';

const Content = ({ title, text,articles}) => (
  <section className="content">
    <h1 className="content-title">{title}</h1>
    <p className="content-text">{text}</p>
    {articles && (
      <div className="content-list">
        {articles.map((recipe) => (
          <Card key={recipe.id} {...recipe} />
        ))}
      </div>
    )}
  </section>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Content.defaultProps = {
  recipes: null,
};

export default Content;
