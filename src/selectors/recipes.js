// eslint-disable-next-line import/prefer-default-export
export const findRecipeBySlug = (recipes = [], slug) => recipes.find(
  (recipe) => recipe.slug === slug,
);
