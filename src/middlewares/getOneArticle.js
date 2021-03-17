import {
  GET_ONE_ARTICLE, saveOneArticle, articleLoading, MODIFY_ARTICLE,
} from 'src/actions';
import axios from 'axios';

const getOneArticles = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ONE_ARTICLE:
      store.dispatch(articleLoading(true));
      axios.get(`https://switch-e-commerce.herokuapp.com/v1/article/${action.id}`)
        .then(
          (response) => {
            const article = response.data;
            store.dispatch(saveOneArticle(article));
            console.log(store.getState().article);
            store.dispatch(articleLoading(false));
          },
        ).catch((err) => console.log(err))
        .finally();
      break;
    case MODIFY_ARTICLE: {
      store.dispatch(articleLoading(true));
      const { article } = store.getState().article;
      const reqid = article.id;
      const reqArticle = {...article};
      reqArticle.sizes = reqArticle.sizes.map((size) => ({
        size_name: size.size_name,
        stock: size.article_has_size.stock,
      }));
      reqArticle.categories = reqArticle.categories.map((category) => ({ title: category.title }));
      delete reqArticle.created_at;
      delete reqArticle.updated_at;
      delete reqArticle.id;

      console.log('ma requete', reqArticle);
      axios.put(`https://switch-e-commerce.herokuapp.com/v1/article/${reqid}`,
      reqArticle)
        .then((response) => {
          console.log(response.data);
          store.dispatch(articleLoading(false));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(articleLoading(false));
        });
    }
      break;
    default:
      next(action);
  }
};

export default getOneArticles;
