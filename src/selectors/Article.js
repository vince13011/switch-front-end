// eslint-disable-next-line import/prefer-default-export
export const findArticleById = (articles = [], id) => articles.find(
  (article) => article.id === id,
);
