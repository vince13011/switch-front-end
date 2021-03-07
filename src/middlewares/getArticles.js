import { GET_ARTICLES_FROM_API, saveArticles, articleLoaded } from 'src/actions';
import axios from 'axios';

const getAllArticles = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ARTICLES_FROM_API:

      axios.get('https://switch-e-commerce.herokuapp.com/v1/articles')
        .then(
          (response) => {
            const Articles = response.data;
            store.dispatch(saveArticles(Articles))
            store.dispatch(articleLoaded());
          },
        ).catch((err) => console.log(err))
        .finally();

      break;
    default:
      next(action);
  }
};

export default getAllArticles;
