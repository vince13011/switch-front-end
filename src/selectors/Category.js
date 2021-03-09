// eslint-disable-next-line import/prefer-default-export
export const findArticlesByCategory = (articles = [], name) => articles.find(
  (article) => article.category.title === name,
);
