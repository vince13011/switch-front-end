import { SET_SIGNUP_INPUT_VALUE } from '../actions';

const initialState = {
  changeField: '',
  email: '',
  password: '',
  confirm: '',
  firstname: '',
  lastname: '',
  phoneNumber: '',
  number: '',
  streetName: '',
  zipcode: '',
  city: '',
};

const signup = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIGNUP_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

export default signup;
