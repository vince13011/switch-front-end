import React from 'react';
import PropTypes from 'prop-types';

import Card from 'src/components/Card';

import './style.scss';

const Content = ({ title, text, articles }) => (
  <section className="content">
    <h1 className="content-title">{title}</h1>
    <p className="content-text">{text}</p>
    {articles && (
      <div className="content-list">
        {articles.map((article) => (
          <Card key={article.id} {...article} />
        ))}
      </div>
    )}
  </section>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
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
