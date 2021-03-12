import { GET_ONE_ARTICLE, saveOneArticle, articleLoading } from 'src/actions';
import axios from 'axios';

const getOneArticles = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ONE_ARTICLE:
      store.dispatch(articleLoading(true))
      axios.get(`https://switch-e-commerce.herokuapp.com/v1/article/${action.id}`)
        .then(
          (response) => {
            const article = response.data;
            store.dispatch(saveOneArticle(article));
            console.log(store.getState().article)
            store.dispatch(articleLoading(false));
          },
        ).catch((err) => console.log(err))
        .finally();

      break;
    default:
      next(action);
  }
};

export default getOneArticles;
