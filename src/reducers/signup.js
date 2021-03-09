import { SET_SIGNUP_INPUT_VALUE, SET_SIGNUP_MESSAGE } from '../actions';

const initialState = {
  message: '',
  email: 'kevdiddnc@kevixxxxxn.fr',
  password: 'azerty123',
  passwordConfirm: 'azerty123',
  firstname: 'kevin',
  lastname: 'detournay',
  phone_number: '0646520398',
  number: 47,
  role_id: 1,
  street_name: 'rue des champs ',
  zip_code: '59390',
  city: 'lys lez lannoy',
  country: 'france',
  additional: 'étage 5',
  user_id: 1,

};

const signup = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIGNUP_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_SIGNUP_MESSAGE:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

export default signup;
