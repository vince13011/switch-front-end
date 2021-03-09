import { SIGNUP, setSignupMessage } from 'src/actions';
import axios from 'axios';

const signup = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNUP: {
      const { fields } = store.getState().signup;
      if (fields.password !== fields.passwordConfirm) {
        return store.dispatch(setSignupMessage('les deux mots de passes doivent être identiques'));
      }
      Object.values(fields).forEach((field) => {
        if (!field) {
          return store.dispatch(setSignupMessage('il faut remplire tous les champs '));
        }
      });

      const sendSignup = async () => {
        try {
          const response = await axios.post('https://switch-e-commerce.herokuapp.com/v1/signup', {
            ...fields,
            street_name: fields.streetName,
            zip_code: fields.zipCode,
            phone_number: fields.phoneNumber,
            user_id: 1,
            role_id: 1,
          });
          console.log(response.data);
        }
        catch (error) {
          store.dispatch(setSignupMessage(error.data));
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
