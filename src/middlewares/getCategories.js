import { GET_CATEGORIES_FROM_API, saveCategories, categoryLoaded } from 'src/actions';
import axios from 'axios';

const getAllCategories = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES_FROM_API:
      axios.get('https://switch-ecommerce.herokuapp.com/v1/categories')

        .then(
          (response) => {
            const categories = response.data;
            store.dispatch(saveCategories(categories));
            store.dispatch(categoryLoaded());
          },
        )
        .catch((err) => console.log(err));

      break;
    default:
      next(action);
  }
};

export default getAllCategories;
