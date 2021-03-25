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

      axios.get(`https://switch-ecommerce.herokuapp.com/v1/article/${action.id}`)
        .then(
          (response) => {
            const article = response.data;

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

      // formating the article i want to modify with the goodshape for the API

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

      // getting the token from the store

      const { token } = store.getState().auth;// admin token needed
      axios.put(`https://switch-ecommerce.herokuapp.com/v1/article/${reqid}`,
        { ...reqArticle }, { headers: { Authorization: `Bearer ${token}` } })
        .then(() => {
          /* after modifing the article ,
          i dispatch action to get this article from api,
          then the useEffect will run and render the page with the modified article ,
           from the api (to be sure the modifying has been done ) */
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
      const { token } = store.getState().auth; // admin token needed
      const reqid = article.id;
      axios.delete(`https://switch-ecommerce.herokuapp.com/v1/article/${reqid}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          /* to avoid the 404 after the article has been deleted,
          i redirect to /admin then we can see all the articles
          without the article just deleted */

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
