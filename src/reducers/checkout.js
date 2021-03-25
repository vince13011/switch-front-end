import { SET_CHECKOUT_LOADING, SET_CHECKOUT_SUCCESS } from '../actions';

const initialState = {
  isLoading: false,
  success: false,
};

const checkout = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CHECKOUT_LOADING:
      return {
        ...state, isLoading: action.status,
      };
    case SET_CHECKOUT_SUCCESS:
      return {
        ...state, success: action.status,
      };
    default:
      return state;
  }
};

export default checkout;
