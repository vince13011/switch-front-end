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
          const response = await axios.post('https://switch-e-commerce.herokuapp.com/v1/user', {
            email: store.getState().auth.email,
            password: store.getState().auth.password,
          });
          if (response.data.errors) {
            console.log(response.data.errors[0]);
            return store.dispatch(logout());
          }
          console.log(response.data);
          const user = {
            user: { ...response.data[0] },
            address: { ...response.data[1] },

          };
          delete user.address.address_orders;
          store.dispatch(setLoginTrue(user));
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
