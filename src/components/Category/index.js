/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'src/components/Card';
import Page from 'src/components/Page';
import './style.scss';

const Category = ({ title, text, articles }) => (
  <Page>
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
  </Page>
);

export default Category;
