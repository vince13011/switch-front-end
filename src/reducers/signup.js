import { SET_SIGNUP_INPUT_VALUE } from '../actions';

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
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
