import { SAVE_ADMIN_ORDERS, SET_ADMIN_LOADING } from '../actions';

const initialState = {
  orders: [],
  isLoading: false,
};

// storing all the orders in the state

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ADMIN_ORDERS:
      return {
        ...state,
        orders:
          action.orders,
      };
    case SET_ADMIN_LOADING:
      return {
        ...state,
        isLoading: action.status,
      };
    default:
      return state;
  }
};

export default reducer;
