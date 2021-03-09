import { SIGNUP ,setSignupMessage} from 'src/actions';
import axios from 'axios';

const signup = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNUP: {
      const sendSignup = async () => {
        try {
          const fields = store.getState().signup;
          Object.values(fields).forEach(
            (field) => {
              if (!field) {
                return store.dispatch(setSignupMessage('vous devez tout remplir'));
              }
            },
          );
          const response = await axios.post('https://switch-e-commerce.herokuapp.com/v1/signup', {
            ...store.getState().signup,
          });
          console.log(response.data);
        }
        catch (error) {
          console.log(error);
        }
      };
      sendSignup();
    }

      break;
    default:
      next(action);
  }
};

export default signup;
