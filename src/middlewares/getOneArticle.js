import {
  GET_ONE_ARTICLE,
  saveOneArticle,
  articleLoading,
  MODIFY_ARTICLE,
  DELETE_ONE_ARTICLE,
  getOneArticle,
  
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
            console.log(response.data);
            store.dispatch(saveOneArticle(article));
            store.dispatch(articleLoading(false));
          },
        ).catch((err) => {
          console.log(err);
          action.history.push('/error');
          store.dispatch(articleLoading(false));
        })
        .finally();
      break;
    case MODIFY_ARTICLE: {
      store.dispatch(articleLoading(true));
      const { article } = store.getState().article;
      const reqid = article.id;
      const reqArticle = { ...article };
      reqArticle.sizes = reqArticle.sizes.map((size) => ({
        size_name: size.size_name,
        stock: size.article_has_size.stock,
      }));
      reqArticle.categories = reqArticle.categories.map((category) => ({ title: category.title }));
      delete reqArticle.created_at;
      delete reqArticle.updated_at;
      delete reqArticle.id;
      const { token } = store.getState().auth;
      axios.put(`https://switch-e-commerce.herokuapp.com/v1/article/${reqid}`,
        { ...reqArticle }, { headers: { Authorization: `Bearer ${token}` } })
        .then(() => {
          store.dispatch(getOneArticle(reqid));
          store.dispatch(articleLoading(false));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(articleLoading(false));
        });
    }
      break;
    case DELETE_ONE_ARTICLE: {
      store.dispatch(articleLoading(true));
      const { article } = store.getState().article;
      const { token } = store.getState().auth;
      const reqid = article.id;
      axios.delete(`https://switch-e-commerce.herokuapp.com/v1/article/${reqid}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          (action.history.push('/admin'));
        });
      store.dispatch(articleLoading(false));
    }
      break;
    default:
      next(action);
  }
};

export default getOneArticles;
