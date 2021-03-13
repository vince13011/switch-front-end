import { ORDER_IS_LOADING, SET_ORDER_SUCCESS } from '../actions';

const initialState = {
  loading: false,
  success: false,
};

const order = (state = initialState, action = {}) => {
  switch (action.type) {
    case ORDER_IS_LOADING:
      return {
        ...state, loading: action.status,
      };
    case SET_ORDER_SUCCESS:
      return {
        ...state, success: action.status,
      };
    default:
      return state;
  }
};

export default order;
