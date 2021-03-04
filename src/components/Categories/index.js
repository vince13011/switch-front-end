/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Card from 'src/components/Card';

import './style.scss';

const Categories = ({ title, articles }) => (
  <section className="content">
    <h1 className="content-title">{title}</h1>
    {articles && (
      <div className="content-list">
        {articles.map((article) => (
          <Card key={article.id} {...article} />
        ))}
      </div>
    )}
  </section>
);

Categories.propTypes = {
  title: PropTypes.string.isRequired,
  articles: PropTypes.string.isRequired,
};

export default Categories;
