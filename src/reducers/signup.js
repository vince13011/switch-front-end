import { SET_SIGNUP_INPUT_VALUE, SET_SIGNUP_MESSAGE, SET_SIGNUP_SUCCESS } from '../actions';

const initialState = {
  message: '',
  fields: {
    email: '',
    password: '',
    passwordConfirm: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
    number: '',
    streetName: '',
    zipCode: '',
    city: '',
    country: '',
    additional: 'un additionnal',

  },
  success: false,

};

const signup = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIGNUP_INPUT_VALUE:
      return {
        ...state,
        fields: { ...state.fields, [action.name]: action.value },
      };
    case SET_SIGNUP_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case SET_SIGNUP_SUCCESS:
      return {
        ...state,
        success: action.status,
      };
    default:
      return state;
  }
};

export default signup;
