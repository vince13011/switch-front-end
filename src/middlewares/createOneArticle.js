import { CREATE_ONE_ARTICLE, setAdminLoading, saveArticles } from 'src/actions';
import axios from 'axios';

const createOneArticle = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_ONE_ARTICLE: {
      store.dispatch(setAdminLoading(true));
      const article = { ...store.getState().createArticle };
      delete article.sizes;
      article.categories = article.selectedCategories.map((category) => ({ title: category }));
      article.sizes = article.selectedSizes;
      delete article.selectedSizes;
      delete article.selectedCategories;
      console.log(article);

      axios.post('https://switch-e-commerce.herokuapp.com/v1/article/', {
        ...article,
      })
        .then(
          (response) => {
            store.dispatch(saveArticles([]));
            store.dispatch(setAdminLoading(false));
          },
        ).catch((err) => {
          console.log(err);
          store.dispatch(setAdminLoading(false));
        })
        .finally();
    }
      break;
    default:
      next(action);
  }
};

export default createOneArticle;
