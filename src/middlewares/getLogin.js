import {
  LOGIN, setLoginTrue, logout, authIsLoading, setAdminTrue, setLogginMessage,
} from 'src/actions';
import axios from 'axios';

const getLogin = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const checkLogin = async () => {
        try {
          // i post email and password to the API and i receive an array, with Id and Token.
          store.dispatch(authIsLoading(true));
          const { email, password } = store.getState().auth;
          const auth = await axios.post('https://switch-ecommerce.herokuapp.com/v1/user', {
            email,
            password,
          });
          // error case :
          if (auth.data.errors) {
            store.dispatch(setLogginMessage('Oups, Veuillez verifier vos identifiants'));
            store.dispatch(authIsLoading(false));
            return;
          }
          // i Get user info from Api using token in header:
          const response = await axios.get(`https://switch-ecommerce.herokuapp.com/v1/user/${auth.data[1]}`, { headers: { Authorization: `Bearer ${auth.data[0]}` } });

          // i put user info and the token into the store formatting the shape i want
          const user = {
            token: auth.data[0],
            user: { ...response.data[0] },
            address: { ...response.data[1] },

          };

          delete user.address.address_orders;

          // if the role received is admin, i set admin=true into the store:

          if (user.user.user_has_role.name === 'admin') {
            store.dispatch(setAdminTrue());
          }
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
