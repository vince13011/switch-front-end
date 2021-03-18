import {
  LOGIN, setLoginTrue, logout, authIsLoading, setAdminTrue, setLogginMessage,
} from 'src/actions';
import axios from 'axios';


const getLogin = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const checkLogin = async () => {
        try {
          store.dispatch(authIsLoading(true));
          const { email, password } = store.getState().auth;
          const auth = await axios.post('https://switch-e-commerce.herokuapp.com/v1/user', {
            email,
            password,
          });

          console.log(auth.data);
          if (auth.data.errors) {
            store.dispatch(setLogginMessage('Oups, Veuillez verifier vos identifiants'));
            store.dispatch(authIsLoading(false));
            return;
          }
          const response = await axios.get(`https://switch-e-commerce.herokuapp.com/v1/user/${auth.data[1]}`, { headers: { Authorization: `Bearer ${auth.data[0]}` } });
          console.log(response.data);

          const user = {
            token: auth.data[0],
            user: { ...response.data[0] },
            address: { ...response.data[1] },

          };

          delete user.address.address_orders;
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
