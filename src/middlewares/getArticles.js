import { GET_ARTICLES_FROM_API, saveArticles, isLoading} from 'src/actions';
import axios from 'axios';

const getAllArticles = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ARTICLES_FROM_API:
      
      axios.get('https://fakestoreapi.com/products/')
        .then(
          (response) => {
            const Articles = response.data;
            store.dispatch(saveArticles(Articles));
            store.dispatch(isLoading(false));
          },
        ).catch((err) => console.log(err));

      break;
    default:
      next(action);
  }
};

export default getAllArticles;
