import {
  LOGIN, setLoginTrue, logout, authIsLoading,
} from 'src/actions';
import axios from 'axios';

const getLogin = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const checkLogin = async () => {
        try {
          store.dispatch(authIsLoading(true));
          const response = await axios.post('https://switch-e-commerce.herokuapp.com/v1/users', {
            email: store.getState().auth.email,
            password: store.getState().auth.password,
          });
          console.log(response.data);
          store.dispatch(setLoginTrue(response.data[0]));
          store.dispatch(authIsLoading(false));
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
