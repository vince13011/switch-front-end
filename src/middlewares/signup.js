import { SIGNUP, setSignupMessage,setSignupSuccess } from 'src/actions';
import axios from 'axios';

const signup = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNUP: {
      const sendSignup = async () => {
        try {
          // get fields from store
          const { fields } = store.getState().signup;
          // check if all the fields are filled
          const allfilled = Object.values(fields).every((value) => value);
          if (fields.password !== fields.passwordConfirm) {
            return store.dispatch(setSignupMessage('les deux mots de passes doivent être identiques'));
          }
          if (!allfilled) {
            return store.dispatch(setSignupMessage('Vous devez remplir tous les champs '));
          }
          const response = await axios.post('https://switch-e-commerce.herokuapp.com/v1/signup', {
            ...fields,
            street_name: fields.streetName,
            zip_code: fields.zipCode,
            phone_number: fields.phoneNumber,
            roleId: 1,
          });
          console.log(response.data);
          if (response.data.errors) {
            return store.dispatch(setSignupMessage(response.data.errors[0]));
          }

          return store.dispatch(setSignupSuccess(true));
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
