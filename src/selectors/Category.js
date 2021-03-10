// eslint-disable-next-line import/prefer-default-export
export const findArticlesByCategory = (articles = [], name) => articles.filter(
  (article) => article.categories.find((categorie) => categorie === name),
);
