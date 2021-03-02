import axios from 'axios';

const { GET_FAVS, saveFavs, isLoading } = require('../actions');

const getFavs = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FAVS: {
      const fetchFavorites = async () => {
        try {
          const response = await axios.get('http://localhost:3001/favorites', {
            headers: { Authorization: `bearer ${store.getState().auth.token}` },
          });

          store.dispatch(saveFavs(response.data));
        }
        catch (error) {
          console.log(error);
          store.dispatch(isLoading(false));
        }
        finally {
          store.dispatch(isLoading(false));
        }
      };
      fetchFavorites();
    }
      break;
    default:
      next(action);
  }
};

export default getFavs;
