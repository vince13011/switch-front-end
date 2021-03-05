import { LOGIN, setLoginTrue, logout, fetchFavs} from 'src/actions';
import axios from 'axios';

const getLogin = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const checkLogin = async () => {
        try {
          store.dispatch(isLoading(true));
          const response = await axios.post('http://localhost:3001/login', {
            email: store.getState().auth.email,
            password: store.getState().auth.password,
          });
          store.dispatch(setLoginTrue(response.data));
          store.dispatch(fetchFavs());
        }
        catch (error) {
          console.log(error);
          store.dispatch(logout());
        }
      };
      checkLogin();
    }

      break;
    default:
      next(action);
  }
};

export default getLogin;
