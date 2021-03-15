import { GET_SIZES_FROM_API, saveSizes } from 'src/actions';
import axios from 'axios';

const getAllSizes = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_SIZES_FROM_API:

      axios.get('https://switch-e-commerce.herokuapp.com/v1/sizes')
        .then(
          (response) => {
            const sizes = response.data;
            store.dispatch(saveSizes(sizes));
          },
        ).catch((err) => console.log(err))
        .finally();

      break;
    default:
      next(action);
  }
};

export default getAllSizes;
