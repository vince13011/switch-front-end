// eslint-disable-next-line import/prefer-default-export
// utils not use in prod ,

export const findArticleById = (articles = [], id) => articles.find(
  (article) => article.id === id,
);
