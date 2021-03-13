import { CHECKOUT_IS_LOADING, SET_CHECKOUT_SUCCESS } from '../actions';

const initialState = {
  loading: false,
  success: false,
};

const checkout = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECKOUT_IS_LOADING:
      return {
        ...state, loading: action.status,
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
